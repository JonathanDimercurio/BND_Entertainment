import { useState, useEffect } from 'react';
import MapList from './MapList';

function MapsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMaps, setLoadedMaps] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      'https://bnd-entertainment-default-rtdb.firebaseio.com/maps.json'
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const maps = [];

        for (const key in data) {
          const map = {
            id: key,
            ...data[key]
          };

          maps.push(map);
        }

        setIsLoading(false);
        setLoadedMaps(maps);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Maps</h1>
      <MapList maps={loadedMaps} />
    </section>
  );
}

export default MapsPage;
