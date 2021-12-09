import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate, useLocation } from "react-router-dom";
import './pages.css'

export default function LoginPage() {
  const emailRef = useRef();
  const passwordRef = useRef();
  let location = useLocation();
  let navigate = useNavigate();
  let from = location.state?.from?.pathname || "/";
  let { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      const res = await login(emailRef.current.value, passwordRef.current.value);
        navigate(from, { replace: true });
    } catch {}
        return setError("Please try again, you broke it!");
  }

  return (
    <>
    <div className='actionable'>
      <div class='shadow justify-content-center card mb-1'>
        <div class='card-body'>
          <h2 className="text-center mb-4">Log In</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            
          <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control  type="email" className="text-center mb-4" ref={emailRef} required />
            </Form.Group>
          
            <Form.Group id="password">
              <Form.Label >Password</Form.Label>
              <Form.Control className="text-center mb-4" type="password" ref={passwordRef} required />
            </Form.Group>
            
          <Button disabled={loading} className="w-100 mb-4" type="submit">
              Log In
            </Button>
          </Form>
          
          <div className="w-100 text-center mt-4">
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>
        </div>
      </div>
      <div className="card-link card-subtitle util">
        Need an account? <Link to="/signup">Sign Up</Link>
      </div>
      </div>
    </>
  );
}
