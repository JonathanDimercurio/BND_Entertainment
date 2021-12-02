import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";
import { useDB } from "../context/DatabaseContext";
import { Link, useNavigate, useLocation } from "react-router-dom";
import styles from "./SignUpPage.module.css";

export default function Signup() {
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    
    const emailRef = useRef();
    const nameRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    
    const { addUser } = useDB();
    const { signup, currentUser, loading, setLoading } = useAuth();
    const [error, setError] = useState("");


  function handleSubmit(e) {
    e.preventDefault();
      
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    setError("");
    setLoading(true);
    const newUser = signup(emailRef.current.value, passwordRef.current.value)
    .then(() => {
        addUser().then(() => {
            setLoading(false);
            navigate(from, { replace: true });
        }, []);
    }, []);
  }
    
    

  return (
    <div className="wrapper" >
            <Card className="shadow form-floating" >
                <Card.Body>
                  <h2 className="text-center form-label">Sign Up</h2>
                  {error && <Alert variant="danger">{error}</Alert>}
                  
                  <Form onSubmit={handleSubmit}>
                    <Form.Group id="email" className="mb-4">
                      <Form.Label >Email</Form.Label>
                      <Form.Control type="email" className="mb-4"
                                placeholder={"Newuser@address.com"}
                                ref={emailRef} required />
                    </Form.Group>
                   
                  <Form.Group id="password" className="mb-4">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" className="mb-1 list-group-item-action"
                                        placeholder={"* * * * * *"}
                                        ref={passwordRef} required />
                      <Form.Control type="password" className="mb-4 "
                                        placeholder={"Confirm password"}
                                        ref={passwordConfirmRef} required />
                    </Form.Group>
                  
                    <Button disabled={loading} className="w-100 mb-0" type="submit">
                      Continue
                    </Button>
                  
                  
                  </Form>
                </Card.Body>
              </Card>
                  <div className="text-center card_text">
                    Already have an account? <Link to="/login">Log In</Link>
                  </div>
    </div>
  );
}
