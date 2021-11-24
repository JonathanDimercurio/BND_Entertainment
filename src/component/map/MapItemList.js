/*  Author: Jonathan Dimercurio     Date: Oct 5, 2021
 *  Description:
 *
 */

import MapItem from "./MapItem";

function MapItemList(props) {
  return (
    // TODO: review 11
    <ul className={props.id}>
      {props.maps.map((map) => (
        <MapItem
          key={map.id}
          id={map.id}
          image={map.image}
          title={map.title}
          description={map.description}
        />
      ))}
    </ul>
  );
}

export default MapItemList;
