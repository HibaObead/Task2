// src/components/Header.js
import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="navbar">
            <nav>
                <ul className="nav-links">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
            <h1 className="logo">Landing</h1>
            <button className="buy-now">Buy Now</button>
        </header>
    );
};

export default Header;
