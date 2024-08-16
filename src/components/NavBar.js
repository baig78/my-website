import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div style={styles.navBar}>
      <div style={styles.title}>Website Title</div>
      <div style={styles.links}>
        <Link to="/">Home</Link>
        <Link to="/about-us">About Us</Link>
        <Link to="/online-training">Online Training</Link>
        <Link to="/become-a-trainer">Become a Trainer</Link>
        <Link to="/contact-us">Contact Us</Link>
      </div>
    </div>
  );
};

const styles = {
  navBar: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px 20px',
    backgroundColor: '#333',
    color: '#fff',
  },
  title: {
    fontSize: '24px',
  },
  links: {
    display: 'flex',
    gap: '15px',
  },
};

export default NavBar;
