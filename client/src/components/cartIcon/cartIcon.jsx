import React from 'react'
import './cartIcon.scss'
import {ReactComponent as ShoppingCart} from '../../assets/shoppingCart.svg'
import {toggleCartHidden} from '../../redux/cart/cart.action'
import {connect} from 'react-redux'
import {selectCartItemsCount} from '../../redux/cart/cart.selector'
const CartIcon = ({toggleCartHidden,qty})=>{
     return (   <div className="cart-icon" onClick={toggleCartHidden}>
                   <ShoppingCart className="shopping-cart" />
                   <span className="item-count">{qty}</span>
               </div>
           )
       
        }
const mapStateToProps = (state)=>({
   qty : selectCartItemsCount(state)
})
 const mapDispatchToProps=(dispatch)=>({
   toggleCartHidden : ()=>dispatch(toggleCartHidden())
})    
export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);