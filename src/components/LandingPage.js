import React from 'react';
import landingImage from '../images/landingpageimage.png';

export default function LandingPage() {
    return(
        <div>
            <h1 className='h1Landing'>Empower Your Financial with SpendWise</h1>
            <h2 className='h2Landing'>Track, Budget, Grow!</h2>
            <p className='pLanding'>Master your money effortlessly with SpendWise. Track expenses, monitor income, set budgets, view account balances, and visualize your financial health with intuitive charts and graphs. Take control of your finances, all in one app.</p>
            <img src={landingImage} alt="Landing Page Image" style={{ width: '250px', height: '300px' }}/>
        </div>
    ) 
}

