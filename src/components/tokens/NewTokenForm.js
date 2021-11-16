import { useRef } from 'react';
import {useHistory} from 'react-router-dom'
import Card from '../ui/Card';
import React from 'react';
import Gameboard from '../game/Gameboard';

function NewTokenForm(props) {
  const addressInputRef = useRef();
  React.useEffect(
      ()=>{
        console.log(props.Gameboard);
      },
    );

  function submitHandler(event) {
    event.preventDefault();

    const enteredAddress = addressInputRef.current.value;

    const TokenData = {
      address: enteredAddress,
    };

    props.onAddToken(TokenData);
  }

  const history = useHistory();

  return (
    <Card>
      <form  onSubmit={submitHandler}>
        <div >
          <label htmlFor='address'>Address</label>
          <input type='text' required id='address' ref={addressInputRef} />
        </div>
        <div>
          <button onClick={() => history.push(
                '/Game',
                {TokenAddress : addressInputRef.current.value,
                Gameboard : props.Gameboard},
            )} >
              Add Token
              </button>
        </div>
      </form>
    </Card>
  );
}

export default NewTokenForm;
