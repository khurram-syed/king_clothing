import React , {lazy,Suspense}from 'react'
import './shopPage.scss'
import {Route} from 'react-router-dom'
import {updateCollections} from '../../redux/shop/shop.actions'
import {firestore,convertCollectionsSnapShotToMap} from '../../firebase/firebase.utils'
import {connect} from 'react-redux'
import Spinner from '../../components/spinner/spinner'
const CollectionOverviewContainer = lazy(()=> import ('../../components/collectionOverview/collectionOverviewContainer'))
const CollectionPageContainer = lazy(()=> import ('../collectionPage/collectionPageContainer'))
class ShopPage extends React.Component{
      
       state = {isLoading : true}

       componentDidMount(){
            const {fetchedCollections} = this.props
           const collectionRef = firestore.collection('collections')
           this.unsubscribeFromSnapshot= collectionRef.onSnapshot( async snapShot=>{
               //  console.log('ShopPage - Snapshot : ',snapShot)
               //  console.log(`ShopPage-Converted Data`,convertCollectionsSnapShotToMap(snapShot))
                const collectionMap = convertCollectionsSnapShotToMap(snapShot)
                fetchedCollections(collectionMap)
                this.setState({isLoading:false})
           })
       }

       render(){  
           const {match} = this.props;
         return(
           <Suspense fallback={<Spinner />} >
             <div className="shop-page">                      
                <Route exact path={`${match.path}`} component={CollectionOverviewContainer} />
                    {/* render={(props)=><CollectionOverviewWithSpinner isLoading={isLoading} {...props} />} /> */}
                <Route  path={`${match.path}/:collectionId`} component={CollectionPageContainer} />
                    {/* // render={(props)=><CollectionPageWithSpinner isLoading={isLoading} {...props} /> } /> */}
             </div> 
           </Suspense>   
              )  
         }            
}

const mapDispatchToProps = (dispatch)=>({
     fetchedCollections : (collections) => dispatch(updateCollections(collections))
})
// const mapStateToProps = (state)=>({
//      collections : selectShopDataAsCollectionPreview(state)
// })
export default connect(null,mapDispatchToProps) (ShopPage);