import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./Firebase";

export default function Signup() {
    const auth = getAuth();
    const emailInputRef = useRef();
    const passwordInputRef = useRef();
    const confirmPasswordInputRef = useRef();
    
    function submitHandler() {
        createUserWithEmailAndPassword(auth, emailInputRef, passwordInputRef)
            .then((userCredential) => {
            const user = userCredential.user;
            console.log(user)
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
          });
    }
    
  return (
    <>
    <Card>
        <Card.Body>
            <h2 className="text-center mb-4">Sign Up</h2>
                <Form onSubmit={submitHandler}>
                    <Form.Group id="email">
                        <Form.Label>Email</Form.Label>
                            <input class="form-control" required type="email" ref={emailInputRef} />
                    </Form.Group>
                    <Form.Group id="password">
                        <Form.Label>Password</Form.Label>
                            <Form.Control required type="password" ref={passwordInputRef} />
                    </Form.Group>
                    <Form.Group id="confirmPassword">
                        <Form.Label>Confirm Password</Form.Label>
                            <Form.Control required type="password" ref={confirmPasswordInputRef} />
                    </Form.Group>

                        <Button className="w-100" type="submit">Sign Up</Button>
                    </Form>
        </Card.Body>
    </Card>
    <div className="w-100 text-center mt-2">
          Already have an account? <Link to="/login">Log In</Link>
    </div>
    </>
  )
}
