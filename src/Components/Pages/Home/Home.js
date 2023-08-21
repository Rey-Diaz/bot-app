import React from 'react';
import { EmblaCarousel } from '../../EmblaCarousel/EmblaCarousel'; // Adjust the path if needed
import './Home.css';

function Home() {
    return (
        <div className="home-container">
            <div className="title-bubble">
                <h1>Welcome to Our Website</h1>
            </div>

            <div className="carousel-bubble">
                <EmblaCarousel />
            </div>

            <div className="content-bubble">
                <div className="mission-statement">
                    <h2>Our Mission</h2>
                    <p>At [Your Company Name], we strive to provide the best services to our clients. Our mission is to continuously innovate and improve our offerings, ensuring customer satisfaction at every step.</p>
                </div>
                <div className="stay-connected">
                    <h2>Stay Connected</h2>
                    <p>Join our community and stay updated with our latest news, events, and offerings. Connect with us on social media or sign up for our newsletter.</p>
                </div>
            </div>
        </div>
    );
}

export default Home;
