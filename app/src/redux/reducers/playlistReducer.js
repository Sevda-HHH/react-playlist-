import { PLAYLIST_ACTIONS } from '../../enums/playlist';
import { SONG_ACTIONS } from '../../enums/songs';


const initialState = {
    error: null,
    data: [ ]
}

const playlistReducer = (state = initialState, action) => {

    switch (action.type) {
        case PLAYLIST_ACTIONS.ADD_PLAYLIST:
            return { ...state, data: [...state.data, action.payload ]}
        case SONG_ACTIONS.ADD_SONG:
            return {
                ...state,
                data: [...state.data, { 
                    songs: [
                        ...state.data.songs,
                        { ...action.payload, isAdded: true }
                    ]
                }]
            }
        default:
            return state;
    }
}

export default playlistReducer; 