import React from 'react';
import './FourSection.css';
import img5 from '../images/img5.svg';

const FourSection = () => {
    return (
        <section className='section'>
            <div className='img'>
                <img src={img5} alt="Illustration" />
            </div>
            <div className='text'>
                <h1>Light, Fast & Powerful</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                </p>
                <div className="hero-buttons">
                    <button className="primary-btn">Purchase Now</button>
                </div>
            </div>
        </section>
    );
};

export default FourSection;
