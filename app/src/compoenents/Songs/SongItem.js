import React from 'react'

function SongItem({ song, handleAddToList, isAdded }) {
    const { full_title, header_image_url, release_date_for_display, title } = song;

    return (
        <article className='d-flex'>

            {song !== undefined && (<>
                <img src={header_image_url} alt={title} />

                <div className='w-100 song-item__content'>
                    <h3>{full_title}</h3>
                    <p>{release_date_for_display} </p>
                    {!isAdded && <button onClick={() => handleAddToList(song)}>Add to the list </button>}
                </div>
            </>)}

        </article>
    )
}

export default SongItem;