import { Button } from 'react-bootstrap';
import Card from '../ui/Card';
import classes from './MapItem.module.css';
import { useHistory } from 'react-router-dom'
import reactDom from 'react-dom';
import React from 'react';


function MapItem(props) {

  React.useEffect(
    ()=>{
      console.log("MapItem "+props.image);
    },
    );
  const history = useHistory();
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <Button onClick={() => history.push(
              '/Game',
            {MapName : props.image,},
            )} >
            Use Map
          </Button>
        </div>
      </Card>
    </li>
  );
}

export default MapItem;
