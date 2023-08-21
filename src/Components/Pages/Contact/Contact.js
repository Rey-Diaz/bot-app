import React from 'react';
import './Contact.css';

function Contact() {
    const handleSubmit = (event) => {
        event.preventDefault();
        // Here you can implement the logic to handle the form submission
    };

    return (
        <div className="contact-container">
            <div className="title-bubble">
                <h1>Contact Us</h1>
            </div>

            <div className="content-bubble">
                <h2>Get in Touch</h2>
                <p>If you have any questions or inquiries, feel free to contact us:</p>
                <p>Email: contact@example.com</p>
                <p>Phone: (123) 456-7890</p>

                <h2>Send Us a Message</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" required />

                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />

                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" rows="4" required />

                    <button type="submit">Send Message</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;
