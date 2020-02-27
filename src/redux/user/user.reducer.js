const initialState = {currentUser : null}

export const userReducer = (currentState=initialState, action) =>{
       switch(action.type){
           case 'SET_CURRENT_USER': 
                      return {...currentState, currentUser:action.payload};
           default: 
                  return currentState;           
       }
}