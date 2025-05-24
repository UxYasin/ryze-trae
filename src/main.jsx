import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css' // Keep this for global non-MUI styles if any
import App from './App.jsx'
import { CustomThemeProvider } from './contexts/ThemeContext.jsx'; // Import the renamed provider

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CustomThemeProvider> {/* Use the refactored provider */}
      <App />
    </CustomThemeProvider>
  </StrictMode>,
)
