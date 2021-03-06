import React from "react";
import RequireAuth from "./util/RequireAuth";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { DBProvider } from "./context/DatabaseContext";
import NavBar from "./navigation/NavBar.js";


// Page imports MOVE THIS
import SignUpPage from "./pages/SignUpPage";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import UpdateProfilePage from "./pages/UpdateProfilePage";
import NewBoardPage from "./pages/NewBoardPage";
import AddTokenPage from "./pages/NewTokenPage";
import GamePage from "./pages/GamePage";
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
// 🤪


function App() {
  return (
      <div className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }} >
          
          
          
          <Router>
          
          <AuthProvider>
          <DBProvider>
          <DndProvider backend={HTML5Backend}>

              <NavBar />
                <Routes>
          
                  <Route path="/login" element={<LoginPage />} />
                  <Route path="/signup" element={<SignUpPage />} />
                  <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        
                  <Route exact path="/" element={
                    <RequireAuth>{" "}
                      <LandingPage />{" "}</RequireAuth>} />
                  <Route exact path="/profile" element={
                    <RequireAuth>{" "}
                      <UpdateProfilePage />{" "}</RequireAuth>} />
                  <Route exact path="/addboard" element={
                    <RequireAuth>{" "}
                      <NewBoardPage />{" "}</RequireAuth>} />
                  <Route exact path="/addtoken" element={
                    <RequireAuth>{" "}
                      <AddTokenPage />{" "}</RequireAuth>} />
                  <Route exact path="/gameboard" element={
                    <RequireAuth>{" "}
                      <GamePage />{" "}</RequireAuth>} />

                </Routes>
          </DndProvider>
        </DBProvider>
        </AuthProvider>
                      
        </Router>
      
    </div>



    
  );

}

export default App;
