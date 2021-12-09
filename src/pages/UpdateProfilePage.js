import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

export default function UpdateProfilePage() {
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const { currentUser, updatePassword } = useAuth();
    const userName = useRef();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const history = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
      

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }
      
    const promises = [];
    setLoading(true);
    setError("");

    if (passwordRef.current.value) {
      promises.push(updatePassword(passwordRef.current.value));
    }

    

    Promise.all(promises)
      .then(() => {
        history.push("/");
      })
      .catch(() => {
        setError("Failed to update account");
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <><div className='actionable'>
      <h6 className="card-title">{currentUser.email}</h6>
      <Card>
        <Card.Body class='card-body'>
          <h1>Update Profile</h1>
          {error && <Alert variant="danger">{error}</Alert>}
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            
            {/* <Form.Group id="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
                type="email"
                ref={newEmailRef}
                placeholder={currentUser.email} />
            </Form.Group> */}
          
            <Form.Group id="password" className="mt-4" >
            <Form.Label>Password</Form.Label>
            <Form.Control
                type="password"
                ref={passwordRef}
                placeholder=" * * * * * * * *" />
            </Form.Group>
          
            <Form.Group id="password-confirm">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control
                className="mb-4"
                type="password"
                ref={passwordConfirmRef}
                placeholder=" * * * * * * * *" />
            </Form.Group>
          
            <Button disabled={loading} className="w-100 mt-2" type="submit">
              Update
            </Button>
          
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <Link to="/">Cancel</Link>
      </div>
      </div>
    </>
  );
}
