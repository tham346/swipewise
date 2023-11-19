import React from 'react';
import swipewiseman from '../images/swipewisemain.png'

export default function NavBar () {
    return (
        <div className="navBar">
            <div>
                <img className='mainLogo' src={swipewiseman} alt="swipewiseman" style={{ width: '235px', height: '85px' }}/>
                <div className='navButton'>
                    <button className='signUp'>Sign Up</button>
                    <button className='login'>Log in</button>
                    <img/>
                </div>
            </div>
        </div>
    )
}