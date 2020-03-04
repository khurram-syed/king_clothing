import {SpinnerOverlay,SpinnerContainer} from './withSpinner.style'
import React from 'react'

const WithSpinner = (WrappedComponent) =>({isLoading,...otherProps})=>{
    console.log('WithSpinner- isLoading :',isLoading)
  return  isLoading?
      ( <SpinnerOverlay>
           <SpinnerContainer />
       </SpinnerOverlay>
    ):(
        <WrappedComponent {...otherProps} />
    )
}

export default WithSpinner