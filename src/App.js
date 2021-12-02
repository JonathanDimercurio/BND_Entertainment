import React from "react";
import RequireAuth from "./util/RequireAuth";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { DBProvider } from "./context/DatabaseContext";
import { useDndContext } from '@dnd-kit/core';
import NavBar from "./navigation/NavBar.js";
import Wallet from "./navigation/Wallet.js";

// Page imports MOVE THIS
import SignUpPage from "./pages/SignUpPage";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import UpdateProfilePage from "./pages/UpdateProfilePage";
import NewBoardPage from "./pages/NewBoardPage";
import AddTokenPage from "./pages/NewTokenPage";
import AllBoardsPage from "./pages/AllBoardsPage";
import GamePage from "./pages/GamePage";
// 🤪


function App() {
  return (
      <Container className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }} >
          
          <div className="w-100" style={{ maxWidth: "400px" }}>
          
          <Router>
          
          <AuthProvider>
          <DBProvider>
          <NavBar />
          <Wallet />

          
                <Routes>
          
                  <Route path="/login" element={<LoginPage />} />
                  <Route path="/signup" element={<SignUpPage />} />
                  <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        
                  <Route exact path="/" element={
                    <RequireAuth>{" "}<LandingPage />{" "}</RequireAuth>} />
                  <Route exact path="/profile" element={
                    <RequireAuth>{" "}<UpdateProfilePage />{" "}</RequireAuth>} />
                  <Route exact path="/addboard" element={
                    <RequireAuth>{" "}<NewBoardPage />{" "}</RequireAuth>} />
                  <Route exact path="/addtoken" element={
                    <RequireAuth>{" "}<AddTokenPage />{" "}</RequireAuth>} />
                  <Route exact path="/gameboard" element={
                    <RequireAuth>{" "}<GamePage />{" "}</RequireAuth>} />
                  <Route exact path="/allboards" element={
                    <RequireAuth>{" "}<AllBoardsPage />{" "}</RequireAuth>} />

                </Routes>
                      
        </DBProvider>
        </AuthProvider>
                      
        </Router>
      </div>
    </Container>



    
  );

}

export default App;
