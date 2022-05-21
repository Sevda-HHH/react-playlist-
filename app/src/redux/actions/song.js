import { SONG_ACTIONS } from "../../enums/songs"
 
export const addSong = (data) => {
    return {
        type: SONG_ACTIONS.ADD_SONG,
        payload: data
    }
}