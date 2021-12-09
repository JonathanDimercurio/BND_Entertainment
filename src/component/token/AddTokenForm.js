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
            
                <Form onSubmit={submitHandler}>
          
                    <Button 
                      className="btn btn-primary w-100 mb-3 shadow" 
                      type="submit">
                        Add Token
                    </Button>
                  
                    <Form.Control 
                      type="text"class='' 
                      id='email' ref={tokenTitleInputRef} 
                      placeholder='Enter Title'
                      required />

                    <div class='m-2'></div>
                      
                    <Form.Control 
                      type="text" 
                      id='email' 
                      ref={tokenInputRef} 
                      placeholder='Enter Image URL'
                      required />
                </Form>
                
        </>
  );
}

export default AddTokenForm;
