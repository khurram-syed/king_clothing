const express = require('express')
const cors = require ('cors')
const bodyParser = require('body-parser')
const path = require('path')

/* This is for gzipping or compression so it can do chunking  */
const compression = require('compression')

/* Get the key from .env file if it is not production */
if(process.env.NODE_ENV!=="production"){
    require('dotenv').config()
}
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)
const app = express()
const port = process.env.PORT || 5000;

app.use(compression())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())


/* Use the index.html file at this build location */
if(process.env.NODE_ENV==="production"){
    app.use(express.static(path.join(__dirname,'client/build')))
    app.get('*',(req,res)=>{
        res.sendfile(path.join(__dirname,'client/build','index.html'))
    })
}

app.post('/payment',(req,res)=>{
    // console.log('**** IN the payment Req - req :',req.body.token.id)
   const body = {source : req.body.token.id,
                 amount : req.body.amount,
                 currency: 'gbp'
                }
   stripe.charges.create(body, (stripeErr,StripeRes)=>{
       if(stripeErr){
           res.status(500).send({error:stripeErr})
       }else{
           res.status(200).send({success:StripeRes})
       }
   })
})


app.listen(port,error=>{
    if(error) throw error;
    console.log('Server is listening to port :',port)
})

