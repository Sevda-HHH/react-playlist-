import { PLAYLIST_ACTIONS } from '../../enums/playlist'

export const addPlaylist = (data) => {
    return {
        type: PLAYLIST_ACTIONS.ADD_PLAYLIST,
        payload: data
    }
}