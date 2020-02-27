import React from 'react'
import CollectionPreview from '../../components/collectionPreview/collectionPreview'
import './collectionOverview.scss'
import {connect} from 'react-redux'
import  {selectShopDataAsCollectionPreview} from '../../redux/shop/shop.selector'

 const CollectionOverview = ({collections})=>{
             return(<div className="collection-overview">
                      <h1 className="collection-header">Collections</h1>
                      {  collections.map(collection=>{
                          return <CollectionPreview key={collection.id} {...collection}/>
                      })
                    } 
                   </div> 
              )
            }  
 const mapStateTopProp= (state)=>({
                collections : selectShopDataAsCollectionPreview(state)  
            })
export default connect(mapStateTopProp)(CollectionOverview);