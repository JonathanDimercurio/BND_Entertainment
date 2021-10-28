/*  Author: Jonathan Dimercurio     Date: Oct 5, 2021
 *  Description: This is a dynamic component, generalizing
 *  the information expected by instantiating a MapItem
 *  component. Every MapItem created will follow the
 *  same component creation proceedure.
 */

import classes from './MapItem.module.css';


function MapItem(props) {
    return (
    <li className={classes.item}>

        {/* Here is the source for the map */}
        <div className={classes.image}>
            <img src={props.image} alt={props.title} />
        </div>

        {/* standard information which can be accessed */}
        <div className={classes.content}>
            <h3>{props.title}</h3>
            <address>{props.address}</address>
            <p>{props.description}</p>
        </div>


        {/* This feature should allow the dm to 
            create a list of maps to use during a
            session, these maps will be loaded on
            intial server query. All players will
            have these maps preloaded to expeditate
            'zoning' to different maps during a session. */}
        <div className={classes.actions}>
            <button>Add To Map Wallet</button>
        </div>


    </li>
    )
}   export default MapItem;
