import React from 'react';
import swipewiseman from '../images/swipewisemain.png'
import { Link } from "react-router-dom";
import { Routes, Route } from 'react-router-dom';



export default function NavBar () {
    return (
        <div className="navBar">
            <div>
                <img className='mainLogo' src={swipewiseman} alt="swipewiseman" style={{ width: '235px', height: '85px' }}/>
            </div>
            <div className='navButton'>

                <Link to="/SignUp" className='signUpBtn'>Sign Up</Link>
                <Link to="/Login" className='loginBtn'>Login</Link>
                <Link to="/" className='homeBtn'>Home</Link>
            </div>
        </div>
    )
}
