import React from 'react'
import CollectionOverview from '../../components/collectionOverview/collectionOverview'
import './shopPage.scss'
import {Route} from 'react-router-dom'
import collectionPage from '../collectionPage/collectionPage'

const  ShopPage = ({match})=>{
  
             return(
                  <div className="shop-page">
                      
                      <Route exact path={`${match.path}`} component={CollectionOverview} />
                       <Route  path={`${match.path}/:collectionId`} component={collectionPage} />
                  </div>
              )
}

export default ShopPage;