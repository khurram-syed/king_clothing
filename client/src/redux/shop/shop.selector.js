import {createSelector} from 'reselect'

const selectShop = (state)=> state.shop

export const selectShopCollections = createSelector(
    [selectShop], 
     shop=> shop.collections
)

/* To make the list of objects into Arry of objects */
export const selectShopDataAsCollectionPreview = createSelector(
     [selectShopCollections],
     collections=> collections? Object.keys(collections).map(title=>collections[title])  : []  
)

export const selectCollectionPageData = (paramURL)=>createSelector(
    [selectShopCollections],
     collections => collections? collections[paramURL] : []
)