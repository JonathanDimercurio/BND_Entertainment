/*
 *  Author: Jonothan, Chris
 */
import { useState, useEffect } from 'react';

import MapItemList from '../component/map/MapItemList';

function MapsPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedMaps, setLoadedMaps] = useState([]);
    const [status, setStatus] = useState('idle');
    const [error, setError] = useState("");

    

    return (
        <div>
            
        </div>
    );
}

export default MapsPage;
