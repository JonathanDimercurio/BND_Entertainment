/*  Author: Date:
 *  Description:
 */
import NewMapForm from './NewMapForm';

function AddMapPage() {
  function addMapHandler(mapData) {
    fetch(
      'https://bnd-entertainment-default-rtdb.firebaseio.com/maps.json',
      {
        method: 'POST',
        body: JSON.stringify(mapData),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  }

  return (
    <section>
      <h1>Add a Map</h1>
      <NewMapForm onAddMap={addMapHandler} />
    </section>
  );
}

export default AddMapPage;