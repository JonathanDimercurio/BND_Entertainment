import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";
import { useDB } from "../context/DatabaseContext";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./SignUpPage.module.css";
import { auth } from "../firebase";

export default function Signup() {
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    
    const emailRef = useRef();
    const nameRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    
    const { addUser } = useDB();
    const { signup, loading, setLoading } = useAuth();
    const [error, setError] = useState("");


  function handleSubmit(e) {
    e.preventDefault();
      
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    setError("");
    setLoading(true);
    const name = nameRef.current.value; 
    try{ const newUser = signup(emailRef.current.value, passwordRef.current.value)
          .then(() => {
            const newUserData = {
              userName: name,
              UID: auth.currentUser.uid,
              email: auth.currentUser.email
            }
            try {
            addUser(newUserData)
              .then(() => {
                setLoading(false);
                navigate('/');
              })
            } catch { console.log('There has been a problem with your operation: ' + e.message) }
          }) 
    } catch (e) { console.log('There has been a problem with your operation: ' + e.message) }
  }

  return (
    <div className="actionable" >
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

                    
                    <Form.Group id="name" className="mb-4">
                      <Form.Label >Display Name</Form.Label>
                      <Form.Control type="text" className="mb-4 list-group-item-action"
                                placeholder={"New User"}
                                ref={nameRef} required />
                    </Form.Group>
                   
                  <Form.Group id="password" className="mb-4">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" className="mb-1 list-group-item-action"
                                        placeholder={"Password"}
                                        ref={passwordRef} required />
                      <Form.Control type="password" className="mb-4 list-group-item-action"
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
