import React from "react"
import { Container } from "react-bootstrap"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { AuthProvider } from "../contexts/AuthContext"

// Page imports
import Signup from "./pages/SignupPage"
import Dashboard from "./pagesLandingPage"
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
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
            </Routes>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  )
}

export default App
