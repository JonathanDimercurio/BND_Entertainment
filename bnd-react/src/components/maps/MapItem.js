/*  Author: Jonathan Dimercurio     Date: Oct 5, 2021
 *  Description: This is a dynamic component, generalizing
 *  the information expected by instantiating a MapItem
 *  component. Every MapItem created will follow the
 *  same component creation proceedure.
 */

import classes from './MapItem.module.css';
import Card from '../../acts/ui/Card';


function MapItem(props) {
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
            <button>Add To Map Wallet</button>
        </div>
    </Card>
    </li>
    );
}   export default MapItem;
