import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { Link, useHistory } from "react-router-dom"
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "./Firebase"



export default function Signup() {
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const history = useHistory()
    
    const submitHandler = async () => {
            try {
            const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
                console.log(user);
            } catch (error){
                console.log(error.message);            }
        };
    
  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>
          <Form onSubmit={submitHandler}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
          <Form.Control
                    type="email"
                    onChange={(event) =>
                            {setRegisterEmail(event.target.value);}}
                    required />
          
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
          
              <Form.Control
                    type="password"
                    onChange={(event) =>
                        {setRegisterPassword(event.target.value);}}
          required />
          
            </Form.Group>
            <Button className="w-100" type="submit">
              Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Already have an account? <Link to="/login">Log In</Link>
      </div>
    </>
  )
}
