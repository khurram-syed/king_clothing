import React from 'react'
import './collectionPreview.scss'
import CollectionItem from '../collectionItem/collectionItem';
import {Link,withRouter} from 'react-router-dom'


const CollectionPreview = ({match,...collection})=>{
    const {title,routeName,items} = collection;
    return(
        <div className="collection-preview">
          <Link to={`${match.url}/${routeName}`} >
             <h1 className="title" >{title}</h1>
           </Link>  
          <div className="preview">
           {items.filter((item,idx)=>idx<4).map(item=>{
              return( 
                <CollectionItem key={item.id} routeName={routeName} {...item} />)
            })}
          </div>
        </div>
    )
}
export default withRouter(CollectionPreview);