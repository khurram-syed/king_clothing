import React from 'react'
import './cartDropdown.scss'
import Button from '../button/button'
import {connect} from 'react-redux'
import CartItem from '../cartItem/cartItem'
import {selectCartItems} from '../../redux/cart/cart.selector'
import {toggleCartHidden} from '../../redux/cart/cart.action'
import {withRouter} from 'react-router-dom'


const CartDropdown = ({cartItems,history,dispatch})=>{
     return (   <div className="cart-dropdown">
                  <div className="cart-items">
                    { cartItems.length? 
                       cartItems.map((item,idx)=>{
                        return <CartItem key={idx} item={item} />
                    }): <span className="emptyMsg"> Your cart is empty..!! </span>  
                    }
                 </div>   
                    <Button inverted="inverted" onClick={()=>{
                                                history.push('/checkout'); dispatch(toggleCartHidden())}}>
                                                    Go To Checkout</Button>
               </div>
           )
        }
const mapStateToProps=(state)=>({
   cartItems : selectCartItems(state)
})     
export default withRouter(connect(mapStateToProps)(CartDropdown));