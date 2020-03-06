import CollectionOverview from './collectionOverview'
import {compose} from 'redux'
import {connect} from 'react-redux'
import WithSpinner from '../withSpinner/withSpinner'
import {selectShopDataAsCollectionPreview,selectIsCollectionsLoading} from '../../redux/shop/shop.selector'
const mapStateToProps = (state)=>({
    collections : selectShopDataAsCollectionPreview(state),
    isLoading : !selectIsCollectionsLoading(state)
})
const CollectionOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionOverview)
export default CollectionOverviewContainer