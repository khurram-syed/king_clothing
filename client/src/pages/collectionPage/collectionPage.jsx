import React from 'react'
import './collectionPage.scss'
import {connect} from 'react-redux'
import  {selectCollectionPageData} from '../../redux/shop/shop.selector'
import CollectionItem from '../../components/collectionItem/collectionItem'

 const CollectionPage = ({uniqueCollection,match})=>{
        const {title, routeName, items} = uniqueCollection;
             return( 
                    <div className="collection-preview">
                      <h1 className="title" >{title}</h1>
                      <div className="preview">
                       {items.map(item=>
                           (
                               <CollectionItem key={item.id} routeName={routeName} {...item} />
                            )
                        )}
                      </div>
                    </div>
              )
            }  
 const mapStateTopProp= (state,ownProps)=>({
                uniqueCollection : selectCollectionPageData(ownProps.match.params.collectionId)(state)  
            })
export default connect(mapStateTopProp)(CollectionPage);