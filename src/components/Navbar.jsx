import React, { useState } from 'react';
import './Navbar.css';
import { useTheme } from '../contexts/ThemeContext'; // Import useTheme

const Navbar = ({ setCurrentScreen, currentScreen }) => {
  const { theme, toggleTheme } = useTheme(); // Access theme context
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
      <ul className={`navbar-links ${isMobileMenuOpen ? 'open' : ''} desktop-links`}> {/* Added desktop-links class for clarity */}
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
            onClick={() => handleNavClick('explore')}
            className={`nav-button ${currentScreen === 'explore' ? 'active' : ''}`}
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
      <div className="navbar-right-controls"> {/* Group theme toggle and menu icon */}
        <button onClick={toggleTheme} className="theme-toggle-btn" aria-label="Toggle theme">
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
        <div className={`menu-icon ${isMobileMenuOpen ? 'open' : ''}`} onClick={toggleMobileMenu}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
      </div>
      {/* Mobile specific links - shown when menu is open */}
      {isMobileMenuOpen && (
         <ul className={`navbar-links ${isMobileMenuOpen ? 'open' : ''} mobile-links`}>
          <li><button onClick={() => handleNavClick('home')} className={`nav-button ${currentScreen === 'home' ? 'active' : ''}`}>Home</button></li>
          <li><button onClick={() => handleNavClick('explore')} className={`nav-button ${currentScreen === 'explore' ? 'active' : ''}`}>Explore</button></li>
          <li><button onClick={() => handleNavClick('profile')} className={`nav-button ${currentScreen === 'profile' ? 'active' : ''}`}>Profile</button></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
