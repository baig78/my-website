import React from 'react';

const Footer = () => {
  return (
    <div style={styles.footer}>
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

const styles = {
  footer: {
    textAlign: 'center',
    padding: '10px 20px',
    backgroundColor: '#333',
    color: '#fff',
  },
};

export default Footer;
