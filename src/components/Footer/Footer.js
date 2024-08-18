import React from 'react';
import './Footer.css'; // Import the CSS file

const Footer = () => {
  return (
    <div className="footer">
      <p>&copy; 2024 My Website. All rights reserved.</p>
      <a 
        href="https://wa.me/1234567890" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="whatsapp-button"
      >
        <i className="fab fa-whatsapp"></i>
      </a>
    </div>
  );
};

export default Footer;
