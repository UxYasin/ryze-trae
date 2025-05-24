import React from 'react';
// Removed import './Navbar.css';
import { useTheme } from '../contexts/ThemeContext';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = ({ setCurrentScreen, currentScreen }) => {
  const { themeMode, toggleThemeMode } = useTheme(); // Use themeMode and toggleThemeMode
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleMobileMenuToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavClick = (screen) => {
    setCurrentScreen(screen);
    if (mobileOpen) {
      handleMobileMenuToggle(); // Close drawer on navigation
    }
  };

  const navItems = [
    { label: 'Home', screen: 'home' },
    { label: 'Explore', screen: 'explore' },
    { label: 'Profile', screen: 'profile' },
  ];

  const drawer = (
    <Box sx={{ width: 250 }} role="presentation" onClick={handleMobileMenuToggle} onKeyDown={handleMobileMenuToggle}>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.screen} disablePadding>
            <ListItemButton 
              onClick={() => handleNavClick(item.screen)} 
              sx={{ 
                fontWeight: currentScreen === item.screen ? 'bold' : 'normal',
                textAlign: 'center' // Center text in drawer items
              }}
            >
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="fixed" enableColorOnDark> {/* enableColorOnDark for better dark mode contrast if needed */}
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            onClick={() => handleNavClick('home')}
            sx={{ flexGrow: 1, cursor: 'pointer' }}
          >
            LifeStyleApp
          </Typography>

          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {navItems.map((item) => (
              <Button
                key={item.screen}
                color="inherit"
                onClick={() => handleNavClick(item.screen)}
                sx={{ 
                  fontWeight: currentScreen === item.screen ? 'bold' : 'normal',
                  borderBottom: currentScreen === item.screen ? '2px solid' : 'none', // Example active style
                  borderRadius: 0, // Flat bottom border
                  paddingBottom: '4px', // Adjust padding for border
                  marginLeft: 2 // Add some margin between buttons
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>

          <IconButton color="inherit" onClick={toggleThemeMode} sx={{ ml: 1 }}> {/* Added margin-left */}
            {themeMode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>

          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleMobileMenuToggle}
            sx={{ display: { md: 'none' } }} // Show only on small screens (xs, sm)
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <nav> {/* Added nav element for Drawer as per MUI docs for semantics */}
        <Drawer
          anchor="right"
          open={mobileOpen}
          onClose={handleMobileMenuToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 250 },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </>
  );
};

export default Navbar;
