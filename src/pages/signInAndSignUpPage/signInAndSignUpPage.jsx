import React from 'react'
import './signInAndSignUpPage.scss'
import SignIn from '../../components/signin/signin'
import SignUp from '../../components/signup/signup'
import {Redirect} from 'react-router-dom'

const SignInAndSignUpPage = ({currentUser})=>{
     return (   <div>
                  {currentUser?(<Redirect to="/" />)  
                   :(<div className="signInAndSignUp">
                        <SignIn />
                        <SignUp />
                   </div>)  
                  } 
               </div>
           )
       
        }
      
export default SignInAndSignUpPage;