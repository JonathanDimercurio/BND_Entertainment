import { useRef } from 'react';

import Card from '../ui/Card';
import classes from './NewMapForm.module.css';
import { IsText, IsURL } from '../../util/Validation';

function NewMapForm(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    if (!IsText(enteredTitle) ||
        !IsURL(enteredImage) ||
        !IsText(enteredDescription)
    ) {
        return;
    }

    const MapData = {
      title: enteredTitle,
      address: enteredImage,
      description: enteredDescription,
    };

    props.onAddMap(MapData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='title'>Map Title</label>
          <input type='text' required id='title' ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='image'>Map URL</label>
          <input type='url' required id='image' ref={imageInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='description'>Description</label>
          <textarea
            id='description'
            required
            rows='5'
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Map</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMapForm;
