import React from 'react'; // Removed useState
import './App.css'
import { useTheme } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import HomeScreen from './screens/HomeScreen';
// FAB and CreatePostModal are no longer imported here

function App() {
  const { theme, toggleTheme } = useTheme();
  const navbarHeight = '60px'; // Approximation for fixed navbar

  // Removed isModalOpen state and handlers (handleFabClick, handleCloseModal, handleSubmitPost)

  return (
    <div className="app-container" style={{ paddingTop: navbarHeight }}>
      <Navbar />
      
      <main> 
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
          <button onClick={toggleTheme}>
            Toggle Theme ({theme})
          </button>
        </div>
        
        <HomeScreen /> {/* HomeScreen now manages its own FAB and Modal */}
      </main>

      {/* FAB and CreatePostModal rendering removed from here */}
    </div>
  )
}

export default App
