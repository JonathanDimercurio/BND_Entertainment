import { Card } from "react-bootstrap";
import React, { useContext } from 'react';
import classes from './Board.module.css';
import FavoritesContext from '../../context/FavoritesContext';

function Board({ loadedBoards }) {
    // const favoritesCtx = useContext(FavoritesContext);
    // const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);

    // function toggleFavoriteStatusHandler() {
    //     if (itemIsFavorite) {
    //       favoritesCtx.removeFavorite(props.id);
    //     } else {
    //       favoritesCtx.addFavorite({
    //         id: props.id,
    //         title: props.enteredTitle,
    //         imageURL: props.enteredImage,
    //         description: props.enteredDescription,
    //     });}
    // 

    return (
              <Card className='shadow p-4 mb-4 bg-white'>
                <div>
                  
                </div>
                <div>
                  <h3></h3>
                </div>
                <div >
                  {/* <button onClick={toggleFavoriteStatusHandler}>
                    {itemIsFavorite ? 'Remove from Favorites' : 'To Favorites'}
                  </button> */}
                </div>
              </Card>
     );
}   export default Board;

