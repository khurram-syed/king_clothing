import shopType from './shopType'

export const updateCollections = (collections)=>({
              type : shopType.UPDATE_COLLECTIONS,
              payload: collections
})