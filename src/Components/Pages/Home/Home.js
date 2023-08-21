import React from 'react';
import { EmblaCarousel } from '../../EmblaCarousel/EmblaCarousel'; // Update the path if needed
import './Home.css';

function Home() {
    return (
        <div className="home-container">
            <h1>Welcome to Our Website</h1>
            <p>Discover our services, chat with our team, and learn more about our journey.</p>

            <EmblaCarousel />

            <section className="home-content">
                <div className="mission-statement">
                    <h2>Our Mission</h2>
                    <p>At [Company Name], we are dedicated to ...</p>
                </div>
                <div className="additional-text">
                    <h2>Our Values</h2>
                    <p>At [Company Name], we believe in ...</p>
                </div>
            </section>
        </div>
    );
}

export default Home;
