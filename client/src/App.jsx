import React from 'react'
import { Outlet,useLocation } from 'react-router-dom'
import { AppProvider } from './context/AppContext'
import { AuthProvider } from './context/AuthContext'
import Navbar from './components/Custom/Navbar'
import Footer from './components/Custom/Footer'

import Spinner from './components/Spinner'
import { useState, useEffect } from 'react'
// import ErrorBoundary from './components/ErrorBoundary';
import ErrorBoundary from './components/ErrorHandle/ErrorBoundary'

// import Spinner from './components/Spinner'
// import { useLocation } from 'react-router-dom'
// import { useState, useEffect } from 'react'

// import { AuthProvider } from './context/AuthContext'


function App() {
  const location = useLocation(); 
  const [loading, setLoading] = useState(false); 

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 300);
    return () => clearTimeout(timer);
  }, [location]);
  return (



<AuthProvider>

    <AppProvider>
      <div className="flex flex-col min-h-screen">
        {loading && <Spinner />}
        <Navbar />
        <div className="flex-grow">
          <ErrorBoundary>
            <Outlet />
          </ErrorBoundary >
          </div>
          <Footer />
        </div>
      </AppProvider>
    </AuthProvider>
  )
}

export default App