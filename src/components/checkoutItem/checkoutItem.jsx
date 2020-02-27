import React from 'react'
import './checkoutItem.scss'
import { deleteItem,removeItem,addItem} from '../../redux/cart/cart.action'
import {connect} from 'react-redux'

const CheckoutItem = ({item,deleteItem,addItem,removeItem})=>{
    return(
                        <div className="shopping-item">
                           <div className="img"  style={{backgroundImage:`url(${item.imageUrl})`}} />
                           <div className="option">{item.name}</div>
                           <div className="option"> 
                               <span onClick={()=>removeItem(item)}>&#8826;</span>
                               {item.qty} 
                               <span onClick={()=>addItem(item)}>&#8827;</span>
                          </div>
                           <div className="option">£{item.price}</div>
                           <div className="cross" 
                                onClick={()=>deleteItem(item)}>&#10005;</div>    
                        </div>    
        )   
}
const mapStateToDispatch=(dispatch)=>({
     deleteItem : (item)=>dispatch(deleteItem(item)),
     removeItem: (item)=>dispatch(removeItem(item)),
     addItem : (item)=>dispatch(addItem(item))
})
export default connect(null,mapStateToDispatch)(CheckoutItem);