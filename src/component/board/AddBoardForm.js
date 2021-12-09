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
        <Form onSubmit={submitHandler}>
  
          <Form.Group id="form-floating mt-3 mb-3">
            <Form.Control 
              type="text"class='form-floating mt-3 mb-3' 
              id='title' ref={titleInputRef} 
              placeholder='Title'
              required />
          </Form.Group>
  
          <Form.Group>
            <Form.Control 
              type="text"class='form-floating mb-3 mt-3' 
              id='email' ref={imageURLInputRef} 
              placeholder='Image URL'
              required />
          </Form.Group>

          <Form.Group>
            <Form.Control 
              type="text"class='form-floating mb-3 mt-3' 
              id='description' ref={descriptionInputRef} 
              placeholder='Description'
              required />
          </Form.Group>

              <Button className="w-100" type="submit">
                Add Game Board
              </Button>

        </Form>
      </Card.Body>
    </Card>
</>
);
}

export default AddBoardForm;
