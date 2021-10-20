/*  Author: Date:
 *  Description:
 */
import { useHistory } from 'react-router-dom';


import MapAddForum from '../../components/forums/MapAddForum.js';

function AddMapPage() {
    const history = useHistory();

    function addMapHandler(mapData) {
    fetch('https://bnd-entertainment-default-rtdb.firebaseio.com/maps.json',
        {
            method: 'POST',
            body: JSON.stringify(mapData),
            header: {
                'Content-Type': 'application/json'
            }
        }
    ).then(() => {
      history.replace('/');  
    });
   }

    return (
    <section>
        <h1>Add A New Map!</h1>
        <MapAddForum onAddMap={addMapHandler} />
    </section>
    );
}   export default AddMapPage;
