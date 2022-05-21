import React from 'react'
import { Link } from 'react-router-dom';

import Songs from '../../compoenents/Songs'



function PlaylistItem({ songs, name }) {
    console.log('songsss', songs);
    return (
        <Link to={`./${name}`}><div className='playlist-item' >
            <h2>{name}</h2>

            <div className='content'>
                {!!songs.length && <Songs isAdded={true} data={songs} />}
            </div>
        </div>
        </Link>
    )
}

export default PlaylistItem