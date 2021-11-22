import React from "react"
import RequireAuth from './util/RequireAuth'

import { Container } from "react-bootstrap"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import { AuthProvider } from "./auth_context/AuthContext"

// Page imports
import Signup from "./pages/SignUpPage"
import LandingPage from "./pages/LandingPage"
import Login from "./pages/LoginPage"
import ForgotPassword from "./pages/ForgotPasswordPage"
import UpdateProfile from "./pages/UpdateProfilePage"

function App() {
  return (
    <Container className="d-flex align-items-center justify-content-center"
          style={{ minHeight: "100vh" }} >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Router>
          <AuthProvider>
            <Routes>
            <Route
                path="/maps-archive"
                element={
                 <RequireAuth>
                  <LandingPage />
                 </RequireAuth>
                }
             />
            </Routes>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  )
}

export default App
