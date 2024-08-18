import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <div className="nav-bar">
      <div className="title">Website Title</div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about-us">About Us</Link>
        <Link to="/online-training">Online Training</Link>
        <Link to="/become-a-trainer">Become a Trainer</Link>
        <Link to="/contact-us">Contact Us</Link>
      </div>
    </div>
  );
};

export default NavBar;
