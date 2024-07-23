// src/components/HeroSection.js
import React from 'react';
import './HeroSection.css';
//import productImage from '../assets/product-image.png'; // Update the image path as necessary

const HeroSection = () => {
    return (
        <section className="hero-section">
            <div className="hero-text">
                <h1>Introduce Your Product Quickly & Effectively</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
                    Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                    ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                </p>
                <div className="hero-buttons">
                    <button className="primary-btn">Purchase UI Kit</button>
                    <button className="secondary-btn">Learn More</button>
                </div>
            </div>
            <div className="hero-image">

            </div>
        </section>
    );
};

export default HeroSection;
