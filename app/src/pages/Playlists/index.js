import React from 'react';
import PlaylistItem from './PlaylistItem';
import { useSelector } from 'react-redux';

import './index.css'

function Playlists() {
  const playlists = useSelector(state => state.playlistReducer.data)
  console.log('selector playlists', playlists);
  return (
    <div className='playlists'>
      <ul>
        {!!playlists && playlists.map(item => {
         return( <li className='playlists-list'>

             <PlaylistItem key={item.listName}name={item.listName} songs={item.songs} />

          </li>)
        })}
      </ul>
    </div>
  )
}

export default Playlists