import React, { createContext, useState, useEffect, useContext, useMemo } from 'react';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const CustomThemeProvider = ({ children }) => { // Renamed for clarity
  const [themeMode, setThemeMode] = useState(() => {
    const storedTheme = localStorage.getItem('themeMode'); // Use themeMode for localStorage key
    return storedTheme ? storedTheme : 'light'; // Default to light theme
  });

  useEffect(() => {
    localStorage.setItem('themeMode', themeMode);
    // Old body class toggling is removed. MUI's CssBaseline handles base styling.
  }, [themeMode]);

  const toggleThemeMode = () => {
    setThemeMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  const muiTheme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: themeMode,
          primary: {
            main: '#4CAF50', // Our existing green primary color
          },
          secondary: {
            main: '#E0E0E0', // Our existing secondary color
          },
          ...(themeMode === 'dark' && {
            background: {
              default: '#121212', // Standard M3 dark background
              paper: '#1e1e1e',   // Slightly lighter for paper elements in dark mode
            },
            text: {
              primary: '#ffffff',
              secondary: 'rgba(255, 255, 255, 0.7)',
            }
          }),
          ...(themeMode === 'light' && {
            background: {
              default: '#FFFFFF', // Standard M3 light background
              paper: '#FFFFFF',   // Paper is typically white in light mode
            },
            text: {
              primary: '#000000',
              secondary: 'rgba(0, 0, 0, 0.6)',
            }
          }),
        },
        shape: {
          borderRadius: 12, // M3 often uses larger border radii (default is 4)
        },
        typography: {
          fontFamily: 'system-ui, Avenir, Helvetica, Arial, sans-serif', // Match existing global font
          // M3 often uses different font weights or styles, can be configured here
        },
        // Components overrides for M3 look (optional, can be extensive)
        // components: {
        //   MuiButton: {
        //     styleOverrides: {
        //       root: {
        //         textTransform: 'none', // M3 buttons often don't use ALL CAPS
        //       },
        //     },
        //   },
        // },
      }),
    [themeMode]
  );

  return (
    <ThemeContext.Provider value={{ themeMode, toggleThemeMode }}>
      <MuiThemeProvider theme={muiTheme}>
        <CssBaseline /> {/* Applies baseline styles and dark/light mode backgrounds */}
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};
