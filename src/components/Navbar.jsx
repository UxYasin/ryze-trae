import React, { useState } from 'react';
import './Navbar.css';
// useTheme hook is not strictly needed here if CSS handles theme on body for navbar and menu icon

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="#">LifeStyleApp</a>
      </div>
      <div className={`menu-icon ${isMobileMenuOpen ? 'open' : ''}`} onClick={toggleMobileMenu}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
      <ul className={`navbar-links ${isMobileMenuOpen ? 'open' : ''}`}>
        {/* Add 'active' class to Home link for demonstration */}
        <li><a href="#" className="active">Home</a></li>
        <li><a href="#">Explore</a></li>
        <li><a href="#">Profile</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
