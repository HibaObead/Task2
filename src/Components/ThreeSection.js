import React from 'react';
import './SecondSection.css';
import img4 from '../images/img4.svg';

const ThreeSection = () => {
    return (
        <section className='section'>
            <div className='img'>
                <img src={img4} alt="Illustration" />
            </div>
            <div className='text'>
                <h1>Light, Fast & Powerful</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                </p>
            </div>
        </section>
    );
};

export default ThreeSection;
