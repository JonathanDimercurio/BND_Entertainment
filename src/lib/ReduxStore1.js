import { createStore } from 'redux';


export const actions = {
    ARCHIVE_MAPITEM: 'ARCHIVE_MAPITEM',
    PIN_MAPITEM: 'PIN_MAPITEM',
}

// bundle actions with the data required to execute them
export const archiveMapItem = id => ({ type: actions.ARCHIVE_MAPITEM, id});
export const pinMapItem = id => ({ type: actions.PIN_MAPITEM, id});

// change the state of a single task
function mapStateReducer(mapitemState) {
    return (state, action) => {
        return {
            ...state,
            mapitemlist: state.mapitemlist.map(mapitem =>
                mapitem.id === action.id ? {...mapitem, state: mapitemState } : mapitem
            ),
        };
    };
}

// the reducer describes how the contents of the store change for each action
export const reducer = (state, action) => {
    switch (action.type) {
            case actions.ARCHIVE_MAPITEM:
                return mapStateReducer('MAPITEM_ARCHIVED')(state, action);
            case actions.PIN_MAPITEM:
                return mapStateReducer('MAPITEM_PINNED')(state, action);
            default:
                return state;
    }
}

// The initial state of our store when the app loads.
// Usually you would fetch this from a server
const defaultMapItemList = [
  { id: '1', title: 'Something', state: 'MAPITEM_INBOX' },
  { id: '2', title: 'Something more', state: 'MAPITEM_INBOX' },
  { id: '3', title: 'Something else', state: 'MAPITEM_INBOX' },
  { id: '4', title: 'Something again', state: 'MAPITEM_INBOX' },
];

export default createStore(reducer, { mapitemlist: defaultMapItemList });
