/*
 *  Author: Jonothan, Chris
 */
import { useState, useEffect } from 'react';

import MapList from '../component/maps/MapList';

function MapsPage() {
    /*
    const [isLoading, setIsLoading] = useState(true);
    const [loadedMaps, setLoadedMaps] = useState([]);
    */

    const [status, setStatus] = useState('idle');
    const [error, setError] = useState("");
    const [loadedMaps, setLoadedMaps] = useState([]);

    const isWaiting = status === 'waiting';
    const isSuccess = status === 'success';
    const isError = status === 'error';

    useEffect(() => {
        //show loading
        setStatus('waiting');
        //query server
        fetch(
          'https://bnd-entertainment-default-rtdb.firebaseio.com/maps.json'
        )
        //process
        .then((response) => { return response.json(); })
        .then((data) => {
            //TODO: should this check response code?
            //NOTE: changing state in diff thens causes errors
            if (data.message) {
                setStatus('error');
                setError(data.message);
                return;
            }
            const maps = [];
            for (const key in data) {
                const map = {
                id: key,
                    ...data[key]
                };

                maps.push(map);
            }
            setStatus('success');
            setLoadedMaps(maps);
        });
    }, []);
    //show waiting if state is waiting
    //show error if state is error
    return (
        <div>
            { isWaiting ? (
                <section><p>Loading...</p></section>
            ) : null }
            { isError ? (
                <section><p>An Error Ocurred</p></section>
            ) : null }
            <section>
                <h1>All Maps</h1>
                <MapList maps={loadedMaps} />
            </section>
        </div>
    );
}

export default MapsPage;
