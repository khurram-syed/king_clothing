import React from 'react'
import './signin.scss'
import FormInput from '../formInput/formInput';
import Button from '../button/button';
import {auth,signInWithGoogle} from '../../firebase/firebase.utils'
class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state = {email:'', password: ''}
    }
    handleChange=(e)=>{
        const {name,value}=e.target;
        this.setState({[name]:value})
    }
    handleSubmit = async (e)  =>{
        e.preventDefault();
        console.log("***Submit SignIn Form****");
        const {email,password} = this.state;
        if(!email || !password){
            alert('Email or Password can not be empty..!')
            return;
        }
        try{
           await auth.signInWithEmailAndPassword(email,password)
           this.setState({email:'',password:''})
        }catch(error){
            console.log("Sign In Error : ",error)
        }
    }
   
    render(){
     return (    <div className="sign-in">
                       <h2>I already have an account</h2>
                       <span>Sign in with your email and password</span>
                       <form onSubmit={this.handleSubmit} className="sign-in-form">
                           <FormInput name="email" type="email" value={this.state.email}
                                      handleChange={this.handleChange} label="Email" />
                           <FormInput name="password" type="password" value={this.state.pwassword}
                                      handleChange={this.handleChange} label="Password" />
                          <div className="formButtons">
                             <Button type="submit">sign in </Button> 
                             <Button onClick={signInWithGoogle} isGoogleSignIn="isGoogleSignIn" >Google Signin </Button> 
                         </div>            
                       </form>
                </div>  
           )
       
        }
    }   
export default SignIn;