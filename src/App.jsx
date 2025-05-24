import './App.css'
import { useTheme } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import HomeScreen from './screens/HomeScreen'; // Import HomeScreen

function App() {
  const { theme, toggleTheme } = useTheme();
  const navbarHeight = '60px'; // Approximation for fixed navbar

  return (
    <div className="app-container" style={{ paddingTop: navbarHeight }}>
      <Navbar />
      
      {/* The main content area. Padding is removed from here and will be handled 
          by individual screen components like HomeScreen if needed. */}
      <main> 
        <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            marginBottom: '20px',
            paddingLeft: '20px', /* Add padding here for elements directly in main but outside HomeScreen */
            paddingRight: '20px',
            paddingTop: '20px' /* Add top padding for this header section */
          }}>
          <h1 style={{ margin: 0 }}>LifeStyle App</h1> 
          <button onClick={toggleTheme}>
            Toggle Theme ({theme})
          </button>
        </div>
        
        {/* Render the HomeScreen which will contain the feed */}
        <HomeScreen />
      </main>
    </div>
  )
}

export default App
