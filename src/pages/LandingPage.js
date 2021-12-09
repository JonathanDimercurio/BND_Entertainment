import React, { useState } from "react";
import { Card, Button, Alert } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
import './pages.css'

export default function LandingPage() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();

  async function handleLogout() {
    setError("");
    try {
      await logout();
    } catch {
      setError("Failed to log out");
    }
  }

  return (
    <>
    <div className='actionable'>
    <h6 className="landing__page c-user">{currentUser.email}</h6>
      <div class='shadow justify-content-center card'>
        <div class='card-body'>
          <h1 className="card-title">{"Logged In"}</h1>
          {error && <Alert variant="danger">{error}</Alert>}
          
          <Link to="/addtoken" className="btn btn-primary w-100 mt-5 shadow">
            Change/Upload Token
          </Link>

          <Link to="/addtoken" className="btn btn-primary w-100 mt-3 shadow">
            Upload New Map
          </Link>

        </div>
      </div>
      <div class="d-flex mb-0 justify-content-center">
            <div class="card-link card-subtitle" className='util'>        
              <Button variant="link" onClick={handleLogout}>
                <h6>Log Out </h6>
              </Button>
            </div>
            <div class="card-link card-subtitle" className='util'>
            <Link to="/profile">
              <Button variant="link">
                <h6>Update Profile</h6>
              </Button>
            </Link>
          </div>
          </div>
    </div>
    </>
  );
}
