import React, { useRef } from 'react';
import { Form, Button, Card } from "react-bootstrap";

function AddTokenForm(props) {
    const tokenTitleInputRef = useRef();
    const tokenInputRef = useRef();

    function submitHandler(event) {
      event.preventDefault();
        
      const enteredTitle = tokenTitleInputRef.current.value;
      const enteredImage = tokenInputRef.current.value;
        
      const tokenData = {
        title: enteredTitle,
        imageURL: enteredImage
      };
      console.log(tokenData)
      props.onAddToken(tokenData);
    }

  return (
          <>
            <Card>
              <Card.Body>
                <h2 className="text-center mb-4">Add New Token</h2>
                <Form onSubmit={submitHandler}>
          
                  <Form.Group id="title">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" ref={tokenTitleInputRef} required />
                  </Form.Group>
          
                  <Form.Group id="imageURL" className="mb-4">
                    <Form.Label>Image URL</Form.Label>
                    <Form.Control type="url" ref={tokenInputRef} required />
                  </Form.Group>

                      <Button className="w-100" type="submit">
                        Add Token
                      </Button>

                </Form>
              </Card.Body>
            </Card>
        </>
  );
}

export default AddTokenForm;
