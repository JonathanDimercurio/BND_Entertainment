import { Card } from "react-bootstrap";
import React, { useContext } from 'react';
import classes from './Board.module.css';
import FavoritesContext from '../../context/FavoritesContext';

function Board(props) {
    const favoritesCtx = useContext(FavoritesContext);
    const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);

    function toggleFavoriteStatusHandler() {
        if (itemIsFavorite) {
          favoritesCtx.removeFavorite(props.id);
        } else {
          favoritesCtx.addFavorite({
            id: props.id,
            title: props.enteredTitle,
            imageURL: props.enteredImage,
            description: props.enteredDescription,
        });}
    }

    return (
            <li className={classes.item}>
              <Card>
                <div className={classes.image}>
                  <img src={props.image} alt={props.title} />
                </div>
                <div className={classes.content}>
                  <h3>{props.title}</h3>
                  <address>{props.address}</address>
                  <p>{props.description}</p>
                </div>
                <div className={classes.actions}>
                  <button onClick={toggleFavoriteStatusHandler}>
                    {itemIsFavorite ? 'Remove from Favorites' : 'To Favorites'}
                  </button>
                </div>
              </Card>
            </li>
     );
}   export default Board;

