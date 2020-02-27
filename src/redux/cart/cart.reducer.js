import {addItemsToCart,removeItem} from '../../utils/cart.utils'
const initialState = {
                      hidden: true,
                      cartItems:[]
                    }

export const cartReducer = (state=initialState,action)=>{
    switch (action.type){
        case 'TOGGLE_CART_HIDDEN':
                                 return {...state,
                                    hidden:!state.hidden}
        case 'ADD_CART_ITEM':
                              return {...state,
                                       cartItems:addItemsToCart(state.cartItems,action.payload)}                                
        case 'DELETE_CART_ITEM': 
                              return{...state,
                                        cartItems:state.cartItems.filter(item=>item.id!==action.payload.id)}
        case 'REMOVE_CART_ITEM': 
                               return {...state,
                                       cartItems:removeItem(state.cartItems,action.payload)}
        default : 
                                 return state                           
    }
}