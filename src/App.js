import React from "react";
import RequireAuth from './util/RequireAuth';
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { NavLogo} from './navigation/NavLogo.js';

// Page imports
import SignUpPage from "./pages/SignUpPage";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import UpdateProfilePage from "./pages/UpdateProfilePage";
import MapsPage from "./pages/MapsPage";

function App() {
  return (

    <Container className="d-flex align-items-center justify-content-center"
          style={{ minHeight: "100vh" }} >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Router>
          <AuthProvider>
            <Routes>
          <Route exact path="/" element={ <RequireAuth>
                <LandingPage /> </RequireAuth>} />
          
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/login" element={<LoginPage />} />
          
          <Route path="/signup" element={<SignUpPage />} />
              

              
          <Route path="/allmaps" element={ <RequireAuth>
                <MapsPage /> </RequireAuth>} />

            </Routes>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  )
}

export default App
