//import { Card } from "react-bootstrap";
//import React, { useContext } from 'react';
//import FavoritesContext from '../../store/favorites-context';
//
//function BoardItem(props) {
//    const favoritesCtx = useContext(FavoritesContext);
//    const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);
//
//    function toggleFavoriteStatusHandler() {
//        if (itemIsFavorite) {
//          favoritesCtx.removeFavorite(props.id);
//        } else {
//          favoritesCtx.addFavorite({
//            id: props.id,
//            title: props.title,
//            description: props.description,
//            image: props.image,
//            address: props.address,
//        });}
//    }
//
//    return (
//       <li>
//         <Card>
//           <div>
//             <img src={props.image} alt={props.title} />
//           </div>
//           <div>
//             <h3>{props.title}</h3>
//             <address>{props.address}</address>
//             <p>{props.description}</p>
//           </div>
//           <div className={classes.actions}>
//             <button onClick={toggleFavoriteStatusHandler}>
//               {itemIsFavorite ? 'Remove from Favorites' : 'To Favorites'}
//             </button>
//           </div>
//         </Card>
//       </li>
//     );
//}   export default MeetupItem;
