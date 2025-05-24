import React, { useState } from 'react';
// Removed import './App.css' as global styles will be reset/managed by MUI and index.css
// import { useTheme } from './contexts/ThemeContext'; // No longer needed here

import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar'; // For AppBar spacing

import Navbar from './components/Navbar';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import ExploreScreen from './screens/ExploreScreen';

function App() {
  const [currentScreen, setCurrentScreen] = useState('home'); // State for current screen

  // Old appHeader constant is removed. Title is in Navbar.

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar setCurrentScreen={setCurrentScreen} currentScreen={currentScreen} />
      
      <Box component="main" sx={{ flexGrow: 1, p: { xs: 2, sm: 3 } }}> {/* Responsive padding */}
        <Toolbar /> {/* Spacer for the fixed AppBar */}
        
        {/* Conditionally render screens */}
        {currentScreen === 'home' && <HomeScreen />}
        {currentScreen === 'profile' && <ProfileScreen />}
        {currentScreen === 'explore' && <ExploreScreen />}
      </Box>
    </Box>
  )
}

export default App
