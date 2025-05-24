import './App.css'
import { useTheme } from './contexts/ThemeContext';
import Navbar from './components/Navbar'; // Import the Navbar component

function App() {
  const { theme, toggleTheme } = useTheme();

  // Estimate Navbar height for padding-top. Adjust if necessary.
  // This is a common way to handle fixed navbars.
  // A more dynamic way might involve JS or CSS variables if navbar height changes.
  const navbarHeight = '60px'; // Approximation, should match Navbar's actual height

  return (
    // Add a class for easier global styling if needed, e.g., for padding
    <div className="app-container" style={{ paddingTop: navbarHeight }}>
      <Navbar />
      
      <main style={{ padding: '20px' }}> {/* Add padding to main content area */}
        <h1>LifeStyle App</h1>
        <p>Current Theme: {theme}</p>
        <button onClick={toggleTheme} style={{ marginBottom: '20px' }}>
          Toggle Theme
        </button>

        <section style={{ marginTop: '20px', padding: '10px', border: '1px solid var(--secondary-color)' }}>
          <h2>Sample Content Section</h2>
          <p>
            This is some sample content to demonstrate the theme. The background and text colors should change
            when you toggle the theme. Links and buttons should also reflect theme changes if styled accordingly.
          </p>
          <a href="#">Sample Link</a>
          <button style={{ marginLeft: '10px' }}>Sample Button</button>
        </section>

        {/* Add more content to test scrolling with fixed navbar */}
        <div style={{ height: '1000px', backgroundColor: 'var(--secondary-color)', marginTop: '20px', padding: '10px' }}>
          Scrollable Content Area
        </div>
      </main>
    </div>
  )
}

export default App
