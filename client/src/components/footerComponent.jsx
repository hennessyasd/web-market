import React from "react";
import "../stylesForComponents/footerStyles.css"
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

const FooterComponent = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h1 className="footer-logo">KROLIK SHOP</h1>
                </div>
                <div className="footer-section">
                    <ul className="footer-list">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Join Us</a></li>
                        <li><a href="#">Help</a></li>
                        <li><a href="#">Support</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <ul className="footer-list">
                        <li><a href="#">Legal</a></li>
                        <li><a href="#">Privacy Center</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Cookies</a></li>
                        <li><a href="#">Ads</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <ul className="social-list">
                        <li><a href="#"><FaFacebookF /></a></li>
                        <li><a href="#"><FaTwitter /></a></li>
                        <li><a href="#"><FaInstagram /></a></li>
                        <li><a href="#"><FaLinkedinIn /></a></li>
                        <li><a href="#"><FaYoutube /></a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 KROLIK SHOP</p>
            </div>
        </footer>
    )
}

export default FooterComponent