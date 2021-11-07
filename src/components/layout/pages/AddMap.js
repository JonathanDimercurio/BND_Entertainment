/*  Author: Date:
 *  Description:
 */

import NewMapForm from '../components/meetups/NewMapForm';

function AddMapPage() {
  function addMeetupHandler(meetupData) {
    fetch(
      'https://bnd-entertainment-default-rtdb.firebaseio.com/maps.json',
      {
        method: 'POST',
        body: JSON.stringify(meetupData),
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
