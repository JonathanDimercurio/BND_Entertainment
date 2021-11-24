import { Card } from "react-bootstrap";
import React from "react";

// TODO: probably need to remake this now...
function MapItem(props) {
  return (
    <div className={props.item}>
      <Card>
        <div className={props.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={props.content}>
          <h3>{props.title}</h3>
          <p>{props.description}</p>
        </div>
        <div className={props.actions}>
          <button>To Favorites</button>
        </div>
      </Card>
    </div>
  );
}
export default MapItem;
