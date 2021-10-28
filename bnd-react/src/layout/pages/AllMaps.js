/*  Author: Date:
 *  Description:
 */
import MapList from '../../components/maps/MapList';


const DUMMY_DATA = [
    {
        id: 'b1',
        title: 'peaceful meadow 1',
        image: 'http://www.milbysmaps.com/wp-content/uploads/2019/10/brazenthrone-anvil-quarter-1F-annotated-web.jpg',
        descripton:
            'some stuff about the map'
    },
    {
        id: 'b2',
        title: 'peaceful meadow 2',
        image: 'http://www.milbysmaps.com/wp-content/uploads/2019/10/brazenthrone-anvil-quarter-1F-annotated-web.jpg',
        description:
            'some stuff about the map this other map'
    },
    {
        id: 'b3',
        title: 'Ambush!',
        image: 'http://www.milbysmaps.com/wp-content/uploads/2019/10/brazenthrone-anvil-quarter-1F-annotated-web.jpg',
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
