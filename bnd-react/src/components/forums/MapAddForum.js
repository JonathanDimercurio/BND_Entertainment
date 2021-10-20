import { useRef  } from 'react';

import Card from '../../acts/ui/Card';
import classes from './MapAddForum.module.css';


function MapAddForum(props) {
    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const descriptionInputRef = useRef();

    function submitHandler(event) {
        event.preventDefault();

        const enteredTitle = titleInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;

        const mapData = {
            title: enteredTitle,
            image: enteredImage,
            description: enteredDescription,
        };

        props.onAddMap(mapData);
    }


    return <Card>
        <form className={classes.form} onSubmit={submitHandler}>

            <div className={classes.control}>
                    <label htlmFor='title'> Map Name</label>
                    <input type="text" required id='title' ref={titleInputRef} />
            </div>

            <div className={classes.control}>
                    <label htlmFor='image'> Map Image</label>
                    <input type="url" required id='image' ref={imageInputRef} />
            </div>
            <div className={classes.control}>
                <label htlmFor='description'> Description</label>
                    <textarea 
                        id='description' 
                        required 
                        rows='5' 
                        ref={descriptionInputRef}>
                    </textarea>
            </div>
            <div className={classes.actions}>
                <button>Add Map</button>
            </div>
            </form>
        </Card>

}   export default MapAddForum;
