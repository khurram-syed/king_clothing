import React from 'react'
import './signup.scss'
import FormInput from '../formInput/formInput';
import Button from '../button/button';
import {auth,createUserProfileDoc} from '../../firebase/firebase.utils'

class SignUp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            displayName:'',
            email:'', 
            password: '',
            confirmPassword:''
        }
    }
    handleChange=(e)=>{
        const {name,value}=e.target;
        // console.log("**Target**",e.target)
        this.setState({[name]:value})
    }
    handleSubmit = async (e)  =>{
        e.preventDefault();
        console.log("***Submit SignUP Form****");
        const {displayName,email,password,confirmPassword} = this.state;
        if(password!==confirmPassword){
            alert("Passwords Do Not Match..!!")
            return;
        }
       if(!displayName || !email){
          alert("All fields required..!!")
          return;
       }
       try{
         const {user} = auth.createUserWithEmailAndPassword(email,password)
         await createUserProfileDoc(user,{displayName})
       }catch(error){
          console.log('Sign up Error :',error)
       }
       this.setState({displayName:'', email:'', password: '', confirmPassword:''})
    }
   
    render(){
        const {displayName,email,password,confirmPassword} = this.state;
     return (    <div className="sign-up">
                       <h2 className="title">I do not have an account</h2>
                       <span>Sign up with your email and password</span>
                       <form onSubmit={this.handleSubmit} className="sign-up-form">
                          <FormInput name="displayName" type="text" value={displayName}
                                      handleChange={this.handleChange} label="Display Name" />
                          <FormInput name="email" type="email" value={email}
                                      handleChange={this.handleChange} label="Email" />            
                           <FormInput name="password" type="password" value={password}
                                      handleChange={this.handleChange} label="Password" />
                            <FormInput name="confirmPassword" type="passsword" value={confirmPassword}
                                      handleChange={this.handleChange} label="Confirm Password" />           
                           <Button type="submit">Sign Up </Button> 
                       </form>
                </div>  
           )
       
        }
    }   
export default SignUp;