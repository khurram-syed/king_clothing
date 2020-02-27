import React from 'react'
import './collectionPreview.scss'
import CollectionItem from '../collectionItem/collectionItem';


const CollectionPreview = ({...collection})=>{
    const {title,routeName,items} = collection;
    return(
        <div className="collection-preview">
          <h1 className="title" >{title}</h1>
          <div className="preview">
           {items.filter((item,idx)=>idx<4).map(item=>{
              return( 
                <CollectionItem key={item.id} routeName={routeName} {...item} />)
            })}
          </div>
        </div>
    )
}
export default CollectionPreview;