
import React from 'react'
import  StripeCheckout from 'react-stripe-checkout'
const onToken = token => {
    console.log('***Token:',token)
    alert('Payment Successfull..!!')
} 
 const StripeButton = ({price})=>{
   
             const priceForStripe = price*100 ;
             const publishableKey = 'pk_test_1n9smWzLAGippLituITSERKr00jxDdNtG8'
             return(<StripeCheckout 
                     label='Pay Now'
                     name='King Clothing'
                     description="King Clothing Payment"
                     currency="GBP"
                     billingAddress={false}
                     shippingAddress={false}
                     img='https://www.vidhub.co/assets/logos/vidhub-icon-2e5c629f64ced5598a56387d4e3d0c7c.png'
                     locale="es"
                     amount={priceForStripe}
                     token = {onToken}
                     stripeKey={publishableKey}
                    /> 
              )
            }  
           

export default StripeButton;