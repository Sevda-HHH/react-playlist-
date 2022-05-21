import {  Route, Routes } from 'react-router-dom';

import Header from './compoenents/Header';
import Home from './pages/HomePage'
import Playlists from './pages/Playlists'
import SinglePlaylistPage from './pages/Playlists/SinglePlaylistPage'

import './App.css'; 

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/playlists" element={<Playlists />} />
        <Route path="/playlists/:id" element={<SinglePlaylistPage />} />
        <Route path="/" element={<Home />} />
      </Routes>

    </div>
  );
}

export default App;
