import React from 'react'
import './checkoutPage.scss'
import {connect} from 'react-redux'
import {selectCartItems,selectCartItemTotal} from '../../redux/cart/cart.selector'
import CheckoutItem from '../../components/checkoutItem/checkoutItem'
import StripeButton from '../../components/stripeButton/stripeButton'



const CheckoutPage = ({cartItems,total})=>{
    return(
        <div className="checkout-page">
             <div className="shpping-block">
                <div className="header-block">
                   <span>Product</span>
                   <span>Description</span>
                   <span>Quatity</span>
                   <span>Price</span> 
                   <span>Remove</span>
                </div>
                <hr />
                <div className="shopping-items">
                   {  cartItems.map((item,idx)=>
                         <CheckoutItem key={idx} item={item} />
                      )
                   } 
                </div>
                <hr />
                <div className="total">Total : £ {total} </div>
            </div>  
            <div className="payment-info">
                *Please use the following test credit card for payments* <br />
                4242 4242 4242 4242 -- Exp:01/20 -CW:123
            </div>  
            <div className="payButton"><StripeButton price={total}/></div>
        </div>
    )
}
const mapStateToProps =(state)=>({
    cartItems : selectCartItems(state),
    total : selectCartItemTotal(state)
})
export default connect(mapStateToProps)(CheckoutPage);