import {directoryData} from './directory.data'

const initialState = {
    sections : directoryData
}

export const directoryReducer = (state=initialState,action) =>{
         switch(action.type){
              default : 
                       return state
         }
}