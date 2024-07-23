import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <div className="App">
            <header className="App-header">
                <div className="pricing-section">
                    <h1>A Price To Suit Everyone</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus</p>
                    <div className="price">
                        <h2>$40</h2>
                        <p>UI Design Kit</p>
                        <h6>See, One price. Simple.</h6>
                    </div>
                    <button className="purchase-btn">Purchase Now</button>
                </div>
            </header>
        </div >
    );
}

export default Footer;
