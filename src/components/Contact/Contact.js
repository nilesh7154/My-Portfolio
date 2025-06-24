import React, { useState } from "react";
import "./Contact.css";

function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here (e.g., send form data to a server)
        alert(`Message Sent: \n Name: ${name} \n Email: ${email} \n Message: ${message}`);
    };

    return (
        <div className="contact-section">
            <h1 className="contact-heading" id="Contact">Contact Me</h1>
            <div className="contact-details">
                <p>If you'd like to get in touch, feel free to send me an email at : <a href="mailto:rathodnilesh7154@gmail.com">rathodnilesh7154@gmail.com</a></p>
                <p>For Whatsapp Chat & Calls : <a href="tel:+8530019387">+8530019387</a></p>
            </div>
            
            <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Your Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Your Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Your Message</label>
                    <textarea
                        id="message"
                        name="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    ></textarea>
                </div>
                <button type="submit" className="submit-button">Send Message</button>
            </form>
        </div>
    );
}

export default Contact;

