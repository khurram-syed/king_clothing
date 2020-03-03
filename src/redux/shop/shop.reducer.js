import SHOP_DATA from './shop.data'
import  shopType  from './shopType'
const initialState = {
       collections : null
     //  collections : SHOP_DATA
}

export const shopReducer = (state=initialState,action) =>{
       switch(action.type){
            case  shopType.UPDATE_COLLECTIONS:
                     return {...state, 
                              collections:action.payload}
            default : 
                 return state
       }
}