/*  Author: Jonathan Dimercurio     Date: Oct 5, 2021
 *  Description: 
 *
 */

import MapItem from './MapItem';
import classes from './MapList.module.css';

function MapList(props) {
  return (
    <ul className={classes.list}>
      {props.maps.map((map) => (
        <MapItem
          key={map.id}
          id={map.id}
          image={map.image}
          title={map.title}
          address={map.address}
          description={map.description}
        />
      ))}
    </ul>
  );
}

export default MapList;
