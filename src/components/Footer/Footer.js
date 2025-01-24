// src/components/Footer.js
import React from "react";
import "./Footer.css"; // Import CSS for styling

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} Nilesh Rathod. All rights reserved.</p>
                <div className="social-links">
                    <a href="https://www.instagram.com/itz_nilu_7154" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/rathod-nilesh7154" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="https://wa.me/+918530019387" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <i className="fab fa-whatsapp"></i>
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
