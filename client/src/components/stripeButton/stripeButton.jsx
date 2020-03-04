
import React from 'react'
import  StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'
 let priceForStripe=0
 const StripeButton = ({price})=>{
   
             priceForStripe = price*100 ;
             const publishableKey = 'pk_test_1n9smWzLAGippLituITSERKr00jxDdNtG8'
             return(<StripeCheckout 
                     label='Pay Now'
                     name='King Clothing'
                     description="King Clothing Payment"
                     currency="GBP"
                     billingAddress={false}
                     shippingAddress={false}
                     img='https://www.vidhub.co/assets/logos/vidhub-icon-2e5c629f64ced5598a56387d4e3d0c7c.png'
                     locale="en"
                     amount={priceForStripe}
                     token = {onToken}
                     stripeKey={publishableKey}
                    /> 
              )
            }  
           
            const onToken = token => {
              console.log('***Token:',token)
              axios({url:'payment',
                     method: 'post',
                     data : {amount : priceForStripe,
                             token
                             } 
                     }).then(resp=>{
                         console.log('***resp : ',resp)
                         alert('Payment Successfull..!!')
                     }).catch(error=>{
                        console.log('Error in payment :',error)
                       alert('There is an issue with your payment. Please use the provided card.')
                     })
              // alert('Payment Successfull..!!')
          }
export default StripeButton;