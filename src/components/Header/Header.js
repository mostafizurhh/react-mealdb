import React from 'react';
import './Header.css';
import logo from './meal-icon.png';

const Header = () => {
    return (
        <div>
            <nav className='header'>
                <div className='banner'>
                    <img src={logo} alt="" />
                    <p>The Meal DB</p>
                    <img src={logo} alt="" />
                </div>
                <div>
                    <a href="./home">Home</a>
                    <a href="./shop">Shop</a>
                    <a href="./about-us">About Us</a>
                </div>
            </nav>
        </div>
    );
};

export default Header;