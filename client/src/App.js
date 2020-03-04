import React from 'react';
import './App.css';
import HomePage from './pages/homePage/homePage.page'
import {Route,Switch, Redirect} from 'react-router-dom'
import ShopPage from './pages/shopPage/shopPage.page';
import Header from './components/header/header';
import SignInAndSignUpPage from './pages/signInAndSignUpPage/signInAndSignUpPage'
import {auth, createUserProfileDoc} from './firebase/firebase.utils'
import {connect} from 'react-redux'
import {setCurrentUser} from './redux/user/user.action'
import CheckoutPage from './pages/checkout/checkoutPage';
import {toggleCartHidden} from './redux/cart/cart.action'
import {selectCartHidden} from './redux/cart/cart.selector'
import {selectCurrentUser} from './redux/user/user.selector'

const Hats = ()=>{
  return <div>
      <h1>Hats</h1>
  </div>
}
class App extends React.Component {
 
   unsubscribeFromAuth = null;
  
  componentDidMount(){
    const {setCurrentUser,collections} = this.props;
    // console.log('App-componentDidMount - state :',this.props)
    
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth=>{
         if(userAuth){
            const userRef = await createUserProfileDoc(userAuth)
            userRef.onSnapshot(snapShot=>{
              // console.log('**snapShot**',snapShot)
               setCurrentUser({
                   id : snapShot.id,
                   ...snapShot.data()
                 })
            })
         }else{
            setCurrentUser(userAuth)
            // console.log("***User***:",userAuth)
         } 
    })
    //  addCollectionAndDoc('collections',collections)  --> To add data getting from SHOP_DATA file into FB DB
  }
  
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
handleDropDown =()=>{
   if(!this.props.hidden){
     this.props.toggleCartHidden()
   }
}
  render(){
        return (
                <div onClick={this.handleDropDown}>
                    <Header />
                    <Switch>
                      <Route exact path="/" component={HomePage} />
                      <Route path="/shop" component={ShopPage} />
                      <Route path="/shop/hats" component={Hats} />
                      <Route path="/checkout" component={CheckoutPage} />
                      <Route render={()=>this.props.currentUser?(<Redirect to="/" />):(<SignInAndSignUpPage />)}/>
                     
                    </Switch>    
                </div>
        );
    }    
}
const mapStateToDispatch= (dispatch)=>({
  setCurrentUser: (user)=>dispatch(setCurrentUser(user)),
  toggleCartHidden: () => dispatch(toggleCartHidden())
})
const mapStateToProps = (state)=>({
    currentUser : selectCurrentUser(state),
    hidden : selectCartHidden(state),
})
export default connect(mapStateToProps,mapStateToDispatch)(App);
