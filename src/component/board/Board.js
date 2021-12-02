import { Card } from "react-bootstrap";
import React, { useContext } from 'react';
import FavoritesContext from '../../context/FavoritesContext';

function Board(props) {
    const favoritesCtx = useContext(FavoritesContext);
    const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);

    function toggleFavoriteStatusHandler() {
        if (itemIsFavorite) {
          favoritesCtx.removeFavorite(props.id);
        } else {
          favoritesCtx.addFavorite({
          title: props.enteredTitle,
          imageURL: props.enteredImage,
          description: props.enteredDescription,
        });}
    }

    return (
       <li>
         <Card>
           <div>
             <img src={props.imageURL} alt={props.title} />
           </div>
           <div>
             <h3>{props.title}</h3>
             <address>{props.address}</address>
             <p>{props.description}</p>
           </div>
           <div>
             <button onClick={toggleFavoriteStatusHandler}>
               {itemIsFavorite ? 'Remove from Favorites' : 'To Favorites'}
             </button>
           </div>
         </Card>
       </li>
     );
}   export default Board;

