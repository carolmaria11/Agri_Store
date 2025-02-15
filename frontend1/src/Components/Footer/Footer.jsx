import React from "react";
import "./Footer.css";
import footer_logo from "../Assets/Frontend_Assets/logo_big.png";
import instagram_icon from "../Assets/Frontend_Assets/instagram_icon.png";
import pintester_icon from "../Assets/Frontend_Assets/pintester_icon.png";
import whatsapp_icon from "../Assets/Frontend_Assets/whatsapp_icon.png";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Logo and Description */}
      <div className="footer-logo">
        <img src={footer_logo} alt="Logo" />
        <p>AGRI-STORE</p>
        {/* <span>Your one-stop shop for everything trendy and stylish.</span> */}
      </div>

      {/* Navigation Links */}
      <ul className="footer-links">
        <li>Home</li>
        <li>Products</li>
        <li>About Us</li>
        <li>Contact</li>
        <li>FAQs</li>
      </ul>

      {/* Social Media Icons */}
      <div className="footer-social-icon">
        <div className="footer-icons-container">
          <img src={instagram_icon} alt="Instagram" />
        </div>
        <div className="footer-icons-container">
          <img src={pintester_icon} alt="Pinterest" />
        </div>
        <div className="footer-icons-container">
          <img src={whatsapp_icon} alt="WhatsApp" />
        </div>
      </div>

      {/* Copyright Section */}
      <div className="footer-copyright">
        <hr />
        <p>© 2023 SHOPPER. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;