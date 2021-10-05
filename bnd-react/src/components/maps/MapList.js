/*  Author: Jonathan Dimercurio     Date: Oct 5, 2021
 *  Description: 
 *
 */

import classes from './MapList.module.css';
import MapItem from './MapItem';

function MapList(props) {
    return (
    <ul className={classes.list}>
            {props.boards.map(board =>  
            <MapItem 
                key={board.id} 
                id={board.id} 
                image={board.image}
                title={board.title}
                address={board.address}
                description={board.description}
            />)}
        </ul>
    )
}   export default MapList;
