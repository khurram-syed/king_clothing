import React from 'react'
import './header.scss'
import {ReactComponent as Logo} from '../../assets/king.svg'
import {Link} from 'react-router-dom'
import {auth}  from '../../firebase/firebase.utils'
import {connect} from 'react-redux'
import CartIcon from '../cartIcon/cartIcon'
import CartDropdown from '../cartDropdown/cartDropdown'
import {selectCurrentUser} from '../../redux/user/user.selector'
import {selectCartHidden} from '../../redux/cart/cart.selector'

const Header = ({currentUser,hidden})=>{
    return(
        <div className="header">
           <Link className="logo-container" to="/" >
               <Logo className="logo" />
           </Link>
           <div className="options">
               <Link className="option" to="/shop">SHOP</Link>
               <Link className="option" to="/">CONTACT</Link>
               {currentUser?(<div className="option" onClick={()=>auth.signOut()}>Sign out</div>)
                    :(<Link className="option" to="/signin">SIGNIN</Link>)
                }
               <CartIcon />
               
               <div>
                 {hidden? null:  
                   <CartDropdown />
                }  
               </div>
           </div>    
        </div>
    )
}
const mapStateToProps = (state)=>({
    currentUser : selectCurrentUser(state),
    hidden : selectCartHidden(state)
})
export default connect(mapStateToProps)(Header);