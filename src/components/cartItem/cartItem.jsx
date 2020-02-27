import React from 'react'
import './cartItem.scss'
const CartItem = ({item})=>{
     return ( <div className="cart-item"> 
                    <div className="img" style={{backgroundImage:`url(${item.imageUrl})`}}/>
                    <div className="item-detail"> 
                        <div className="item-desc">{item.name}</div>
                        <span className="item-price">£{item.price}x{item.qty}=£{item.price*item.qty}</span>
                    </div>
             </div>
           )
        }
  
export default CartItem;