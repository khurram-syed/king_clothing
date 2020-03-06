import CollectionPage from './collectionPage'
import {compose} from 'redux'
import {connect} from 'react-redux'
import WithSpinner from '../../components/withSpinner/withSpinner'
import {selectShopDataAsCollectionPreview,selectIsCollectionsLoading} from '../../redux/shop/shop.selector'

const mapStateToProps = (state)=>({
    collections : selectShopDataAsCollectionPreview(state),
    isLoading : !selectIsCollectionsLoading(state)
})

const CollectionPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionPage)
export default CollectionPageContainer