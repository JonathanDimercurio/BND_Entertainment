import React, { useRef } from 'react';
import { Form, Button, Card } from "react-bootstrap";

function AddBoardForm(props) {
    const titleInputRef = useRef();
    const imageURLInputRef = useRef();
    const descriptionInputRef = useRef();

    function submitHandler(event) {
      event.preventDefault();
        
      const enteredTitle = titleInputRef.current.value;
      const enteredImage = imageURLInputRef.current.value;
      const enteredDescription = descriptionInputRef.current.value;
        
      const boardData = {
        title: enteredTitle,
        imageURL: enteredImage,
        description: enteredDescription,
      };
      props.onAddBoard(boardData);
    }

  return (
          <>
            <Card>
              <Card.Body>
                <h4 className="text-center mb-4">Add New Board</h4>
                <Form onSubmit={submitHandler}>
          
                  <Form.Group id="title">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" ref={titleInputRef} required />
                  </Form.Group>
          
                  <Form.Group id="imageURL">
                    <Form.Label>Image URL</Form.Label>
                    <Form.Control type="url" ref={imageURLInputRef} required />
                  </Form.Group>
          
                  <Form.Group id="description">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" ref={descriptionInputRef} required />
                    <Form.Label>{" "}</Form.Label>
                  </Form.Group>
          
                  <Button className="w-100" type="submit">
                    Add Board
                  </Button>
          
          
                </Form>
              </Card.Body>
            </Card>
        </>
  );
}

export default AddBoardForm;
