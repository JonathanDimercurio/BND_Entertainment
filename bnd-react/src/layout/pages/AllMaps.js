/*  Author: Date:
 *  Description:
 *
 */
import { useState, useEffect } from 'react';

import MapList from '../../components/maps/MapList';

function AllMapsPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedMaps, setLoadedMaps] = useState([]);

    // omitting the array of objects at the end of the useEffect()
    // block causes the block to execute every time the component 
    // is called.
    useEffect(() => {
        setIsLoading(true);
        fetch('https://bnd-entertainment-default-rtdb.firebaseio.com/maps.json'
            ).then((response) => {
                return response.json();
            }).then((data) => {
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
        return  (
            <section>
                <p>Loading Maps...</p>
            </section>
        );
    }

    return (
    <section>
    <h1>All the maps</h1>
        <MapList boards={loadedMaps} />  
    </section>
    );
}   export default AllMapsPage;
