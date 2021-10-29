/*  Author: Date:
 *  Description:
 */
import STATICMAP01 from '../../assets/01_STATIC_MAP.jpg';
import STATICMAP02 from '../../assets/02_STATIC_MAP.jpg';
import DYNAMICMAP01 from '../../assets/01_DYNAMIC_MAP.gif';
import MapList from '../../components/maps/MapList';


const DUMMY_DATA = [
    {
        id: 'b1',
        title: 'peaceful meadow 1',
        image: STATICMAP01,
        descripton:
            'some stuff about the map'
    },
    {
        id: 'b2',
        title: 'peaceful meadow 2',
        image: STATICMAP02,
        descripton:
            'some stuff about the map this other map'
    },
    {
        id: 'b3',
        title: 'Ambush!',
        image: DYNAMICMAP01,
        descripton:
            'some stuff about this ambush map'
    },
    
];



function AllMapsPage() {
    return <section>
    <h1>All the maps</h1>
        <MapList /> 
    </section>
}   export default AllMapsPage;
