import { useState } from 'react'
import './App.css'
import { useNavigate } from 'react-router-dom'
import Home from './Pages/home'
import About from './Pages/About'
import World from './Pages/World'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import AuthUI from './Components/authentication/Auth-ui'
import ProtectedRoute from './routes/ProtectedRoute'
import MainLayout from './layout/MainLayout'
import { ChatPanelProvider } from './context/ChatPanelContext'

function App() {
   return (
    <Router>
      <ChatPanelProvider>
        <Routes>
          {/* Public Route (no navbar) */}
          <Route path="/" element={<AuthUI />} />

          {/* Protected Routes with shared layout */}
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <MainLayout>
                  <Home />
                </MainLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/world"
            element={
              <ProtectedRoute>
                <MainLayout>
                  <World />
                </MainLayout>
              </ProtectedRoute>
            }
          />

          <Route
            path="/about"
            element={
              <ProtectedRoute>
                <MainLayout>
                  <About />
                </MainLayout>
              </ProtectedRoute>
            }
          />

        </Routes>
      </ChatPanelProvider>
    </Router>
  );
}

export default App
