import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Header } from './components/Header'
import { Dashboard } from './pages/Dashboard'
import { Training } from './pages/Training'
import { Specialists } from './pages/Specialists'
import { Terms } from './pages/Terms'
import { Admin } from './pages/Admin'
import './App.css'

function App() {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false)

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/training/*" element={<Training />} />
            <Route path="/specialists" element={<Specialists />} />
            <Route path="/terms" element={<Terms />} />
            <Route 
              path="/admin" 
              element={
                <Admin 
                  isLoggedIn={isAdminLoggedIn} 
                  setIsLoggedIn={setIsAdminLoggedIn} 
                />
              } 
            />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App

