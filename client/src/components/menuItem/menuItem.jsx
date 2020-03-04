import React from 'react'
import './menuItem.scss'
import {withRouter} from 'react-router-dom'

const CollectionItem = ({title,imageUrl,size,linkUrl,history,match})=>{
    return( 
            <div className={`menu-item ${size}`}  onClick={()=>history.push(`${match.url}${linkUrl}`)}>
                <div className="background-image" style={{backgroundImage:`url(${imageUrl})`}}></div>
                <div className="content">
                    <h3 className="title"> {title}</h3>
                    <span className="subTitle" >SHOP NOW</span>
                </div>
        </div>
 )}
 export default withRouter(CollectionItem);