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
            <EmblaCarousel initialSlide={2} />
            </div>

            <div className="columns-container">
                <div className="mission-statement bubble">
                    <h2>Our Mission</h2>
                    <p>At [Your Company Name], we strive to provide the best services to our clients...</p>
                </div>
                <div className="stay-connected bubble">
                    <h2>Stay Connected</h2>
                    <ul>
                        {/* Your list items here */}
                        <li>Item 1</li>
                        <li>Item 2</li>
                        <li>Item 3</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Home;
