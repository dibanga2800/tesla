import React from 'react';
import './Header.css';
import TeslaLogo from '../assets/teslaLogoSmall.svg';

const Header = () => {
    return (
        <div className='header'>
            <div className="header__logo">
                <img src={TeslaLogo} alt="tesla" />
            </div>

            <div className="header__center">
                <p>Model 5</p>
                <p>Model 3</p>
                <p>Model x</p>
                <p>Model y</p>
                <p>solar Roof</p>
                <p>solar Panel</p>
            </div>

            <div className="header__right">
                <p>shop</p>
                <p>Tesla Account</p>

            </div>

        </div>
    )
}

export default Header;
