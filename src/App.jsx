import React, { useState } from 'react';
import './App.css'
import { useTheme } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import ExploreScreen from './screens/ExploreScreen';

function App() {
  // const { theme, toggleTheme } = useTheme(); // No longer needed here if App itself doesn't toggle
  const navbarHeight = '60px'; // Approximation for fixed navbar
  const [currentScreen, setCurrentScreen] = useState('home'); // State for current screen

  // The header section with app title and theme toggle can be part of the App layout
  // or moved into individual screens if different screens need different headers.
  // For now, keeping it global here.
  const appHeader = (
    <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        marginBottom: '20px',
        paddingLeft: '20px',
        paddingRight: '20px',
        paddingTop: '20px'
      }}>
      <h1 style={{ margin: 0 }}>LifeStyle App</h1> 
      {/* Old theme toggle button removed from here */}
    </div>
  );

  return (
    <div className="app-container" style={{ paddingTop: navbarHeight }}>
      <Navbar setCurrentScreen={setCurrentScreen} currentScreen={currentScreen} />
      
      <main> 
        {appHeader} {/* Render the common app header */}
        
        {/* Conditionally render screens */}
        {currentScreen === 'home' && <HomeScreen />}
        {currentScreen === 'profile' && <ProfileScreen />}
        {currentScreen === 'explore' && <ExploreScreen />}
      </main>
    </div>
  )
}

export default App
