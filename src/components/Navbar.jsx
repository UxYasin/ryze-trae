import React, { useState } from 'react';
import './Navbar.css';

const Navbar = ({ setCurrentScreen, currentScreen }) => { // Accept props
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavClick = (screenName) => {
    setCurrentScreen(screenName);
    if (isMobileMenuOpen) { // Close mobile menu on navigation
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        {/* Make logo clickable to navigate home */}
        <button onClick={() => handleNavClick('home')} className="logo-button">
          LifeStyleApp
        </button>
      </div>
      <div className={`menu-icon ${isMobileMenuOpen ? 'open' : ''}`} onClick={toggleMobileMenu}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
      <ul className={`navbar-links ${isMobileMenuOpen ? 'open' : ''}`}>
        <li>
          <button 
            onClick={() => handleNavClick('home')} 
            className={`nav-button ${currentScreen === 'home' ? 'active' : ''}`}
          >
            Home
          </button>
        </li>
        <li>
          <button 
            onClick={() => console.log('Explore clicked (no screen yet)')} 
            className={`nav-button ${currentScreen === 'explore' ? 'active' : ''}`} // For future 'explore' screen
          >
            Explore
          </button>
        </li>
        <li>
          <button 
            onClick={() => handleNavClick('profile')}
            className={`nav-button ${currentScreen === 'profile' ? 'active' : ''}`}
          >
            Profile
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
