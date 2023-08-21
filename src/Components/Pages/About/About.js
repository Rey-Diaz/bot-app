import React from 'react';
import './About.css'; // You can create a CSS file for styling

function About() {
    return (
        <div className="about-container">
            <h1>About Us</h1>
            
            <div className="about-section">
                <img src="https://via.placeholder.com/150" alt="Placeholder Image 1" className="about-image" />
                <div className="about-text">
                    <h2>Our Mission</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.</p>
                </div>
            </div>
            
            <div className="about-section">
                <img src="https://via.placeholder.com/150" alt="Placeholder Image 2" className="about-image" />
                <div className="about-text">
                    <h2>Our Team</h2>
                    <p>Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.</p>
                </div>
            </div>

            <div className="about-section">
                <img src="https://via.placeholder.com/150" alt="Placeholder Image 3" className="about-image" />
                <div className="about-text">
                    <h2>Our History</h2>
                    <p>Quisque sit amet nunc eu urna imperdiet rhoncus ac at nisl. Donec pharetra elit vitae tincidunt tincidunt.</p>
                </div>
            </div>
        </div>
    );
}

export default About;
