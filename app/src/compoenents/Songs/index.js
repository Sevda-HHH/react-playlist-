import React from 'react';
import SongItem from './SongItem';

import './index.css';

function Songs({ data, handleAddToList, isAdded }) { 
    return (
        <div className='song-list'>
            <ul>
                {data !== undefined && data.map(item => {
                    return (
                        <li>
                            {isAdded ?
                                <SongItem handleAddToList={handleAddToList} isAdded={isAdded} song={item} />
                                : <SongItem handleAddToList={handleAddToList} song={item.result} />
                            }
                        </li>
                    )
                })}

            </ul>
        </div>
    )
}

export default Songs