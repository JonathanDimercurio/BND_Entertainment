/*
 *  Author: Jonothan, Chris
 */
import { useState, useEffect } from 'react';

import MapList from '../component/maps/MapList';

function MapsPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedMaps, setLoadedMaps] = useState([]);
    const [status, setStatus] = useState('idle');
    const [error, setError] = useState("");
    const [loadedMaps, setLoadedMaps] = useState([]);


    // useEffect might be useful here

    return (
        <div>
            
        </div>
    );
}

export default MapsPage;
