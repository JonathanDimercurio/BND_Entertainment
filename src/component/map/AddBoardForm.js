import React from 'react';
import { useRef } from 'react';
import { Form, Button, Card } from "react-bootstrap";

function AddBoardForm(props) {
    const titleInputRef = useRef();
    const imageURLInputRef = useRef();
    const descriptionInputRef = useRef();

    function submitHandler(event) {
//      event.preventDefault();
//
//      const enteredTitle = titleInputRef.current.value;
//      const enteredImage = imageInputRef.current.value;
//      const enteredDescription = descriptionInputRef.current.value;
//
//      const boardData = {
//        title: enteredTitle,
//        imageURL: enteredImage,
//        description: enteredDescription,
//      };
//
//      props.addBoardPage(boardData);
    }

  return (
          <>
            <Card>
              <Card.Body>
                <h2 className="text-center mb-4">Add Board</h2>
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
