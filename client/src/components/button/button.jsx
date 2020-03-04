import React from 'react'
import './button.scss'

const Button = ({children,isGoogleSignIn,inverted,...otherProps})=>{
    // console.log("**Inverted :",inverted)
     return (   <button className={`${isGoogleSignIn?'google-sign-in':''} ${inverted?'inverted':''} custom-button`} 
                        {...otherProps} >
                   {children}
                </button>
           )
       
        }
      
export default Button;