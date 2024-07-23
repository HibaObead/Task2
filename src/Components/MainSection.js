// src/components/MainSection.js
import React from 'react';
import './MainSection.css';
import img2 from '../images/img2.svg';
import icon1 from '../images/icon1.svg';

const MainSection = () => {
    return (
        <div className="main-section">
            <div className="content">
                <h1 className='h1'>Light, Fast & Powerful</h1>
                <p className='p1'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                </p>
                <div className="features">
                    <div className="feature">
                        <img src={icon1} alt="icon1" />
                        <h3>Title Goes Here</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.</p>
                    </div>
                    <div className="feature">
                        <img src={icon1} alt="icon2" />
                        <h3>Title Goes Here</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.</p>
                    </div>
                </div>
            </div>
            <div className="illustration">
                <img src={img2} alt="illustration" />
            </div>
        </div>
    );
};

export default MainSection;
