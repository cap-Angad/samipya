import React, { useState } from "react";
import "./contacts.css";

const Contacts = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log(formData);
    };

    return (
        <div className="contact-container">
            <div className="contact-info">
                <h1>Get in Touch</h1>
                <div className="info-section">
                    <h3>Email</h3>
                    <p>example@gmail.com</p>
                    <p>example2@gmail.com</p>
                </div>
                <div className="info-section">
                    <h3>Phone</h3>
                    <p>+91 9826000000</p>
                    <p>+91 9826000011</p>
                </div>
                <div className="info-section">
                    <h3>Location</h3>
                    <p>123 Business Street</p>
                    <p>New Delhi, India</p>
                </div>
            </div>

            <div className="contact-form-section">
                <form onSubmit={handleSubmit} className="contact-form">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Your name"
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Your email"
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            placeholder="Your message here..."
                            value={formData.message}
                            onChange={(e) => setFormData({...formData, message: e.target.value})}
                            required
                        ></textarea>
                    </div>
                    <button type="submit" className="submit-button">Send Message</button>
                </form>
            </div>
        </div>
    );
};

export default Contacts;
