// src/Components/Pages/Contact.js

import React from 'react';
import './Contact.css';

function Contact() {
    return (
        <div className="contact-container">
            <h1>Contact Us</h1>
            <form>
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <textarea placeholder="Message"></textarea>
                <button type="submit">Send</button>
            </form>
        </div>
    );
}

export default Contact;
