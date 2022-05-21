import React from 'react'

import SearchBox from '../SearchBox';
import Songs from '../Songs';

import './index.css';

function PlayList({ playList,
    isAdded,
    handlePlaylistInputChange,
    addPlaylist,
    inputPlaylistVal }) {

    return (
        <div className="playlist">
            <h2>Playlist</h2>

            <SearchBox isAdded={true} handleInputChange={handlePlaylistInputChange} inputVal={inputPlaylistVal} />

            <div className='content'>
                {!!playList.songs.length && <Songs isAdded={isAdded} data={playList.songs} />}
            </div>

            {inputPlaylistVal !== '' && !!playList.songs.length ? <button onClick={() => addPlaylist(playList)}  >Add a playlist </button>
                : <button onClick={() => addPlaylist(playList)} disabled>Add a playlist </button>}
        </div>
    )
}

export default PlayList;