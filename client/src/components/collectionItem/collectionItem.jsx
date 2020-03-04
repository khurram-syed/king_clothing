import React from 'react'
import './collectionItem.scss'
import Button from '../button/button'
import {addItem} from '../../redux/cart/cart.action'
import {connect} from 'react-redux'

const CollectionItem = ({addItem,...item})=>{
     return (<div className="collection-item">
                     <div className="img" style={{backgroundImage:`url(${item.imageUrl})`}}  />
                     <div className="collection-footer">
                       <span className="name">{item.name}</span>
                       <span className="price">£{item.price}</span>
                   </div>
                   <Button inverted onClick={()=>addItem(item)}>Add To Cart</Button>
               </div>
           )
       
        }
 const mapStateToDispatch=(dispatch)=>({
    addItem: (item)=>dispatch(addItem(item)) 
 })     
export default connect(null,mapStateToDispatch)(CollectionItem);