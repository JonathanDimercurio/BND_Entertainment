import React, { useState } from "react";
import { Card, Button, Alert } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

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
      
          
      <Card>
        <Card.Body>
          <h1 className="text-center mb-5">{"Current User:"}</h1>
          {error && <Alert variant="danger">{error}</Alert>}
          <h5 className="text-center mb-5">{currentUser.email}</h5>
          <Link to="/profile" className="btn btn-primary w-100 mt-3">
            Update Profile
          </Link>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <Button variant="link" onClick={handleLogout}>
          Log Out
        </Button>
      </div>
    </>
  );
}
