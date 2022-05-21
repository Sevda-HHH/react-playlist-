import React from 'react'

import { useParams } from 'react-router-dom';
import {useSelector} from 'react-redux';
import PlaylistItem from './PlaylistItem';

function SinglePlaylistPage() {
    const { id } = useParams();
    const playlists = useSelector(state => state.playlistReducer.data)
    const playlist = playlists.find(item => item.listName === id); 
console.log('find playlist', playlist);
    return (
       <div>{  !!playlist&&(<PlaylistItem key={playlist.listName} name={playlist.listName} songs={playlist.songs} />)}</div>
    )
}

export default SinglePlaylistPage