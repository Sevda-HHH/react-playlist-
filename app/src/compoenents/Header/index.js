import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './index.css';

function Header() {
  const playlists = useSelector(state => state.playlistReducer.data);

  return (
    <header>
      <ul>
        <li>
          <Link to='/'> Home </Link>
        </li>
        <li>
          <Link to='/playlists'> Playlists </Link><span>{playlists.length}</span>
        </li>
      </ul>
    </header>
  )
}

export default Header;