import { useState } from 'react'
import {logoUrl} from '../utils/constants'

const Header = () => {

    const [isLoggedIn, setIsLoggenIn] = useState(false);

    return (
        <div className="header">
            <div className="logo-container">
                <img 
                    className="logo" 
                    src= {logoUrl}
                    alt="Swiggy-clone"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <li className='login-logout' onClick={() => {setIsLoggenIn(!isLoggedIn)}}>{isLoggedIn ? "Logout" : "Login"}</li>
                </ul>
            </div>
        </div>
    )
}

export default Header