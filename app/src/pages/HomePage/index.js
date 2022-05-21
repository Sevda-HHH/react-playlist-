import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';

import PlayList from '../../compoenents/Playlist';
import SearchBox from '../../compoenents/SearchBox'
import Songs from '../../compoenents/Songs';
import Pagination from '../../compoenents/Pagination';
import SelectPerpage from '../../compoenents/PerPageDropdownMenu';

import { addPlaylist } from '../../redux/actions/playlist';

import './index.css'


function Home() {

    const [pageCount, setPageCount] = useState();
    const dispatch = useDispatch();
    const [inputVal, setInputVal] = useState('');
    const [perPage, setPerPage] = useState(3);
    const [page, setPage] = useState(1);
    const [data, setData] = useState(); 
    const [listData, setListData] = useState({
        listName: "",
        songs: []
    });

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'genius.p.rapidapi.com',
            'X-RapidAPI-Key': '7a5efe9a18msh61604e48e5ac097p1157efjsn5e317a71e310'
        }
    };

    useEffect(() => {
        fetch(`https://genius.p.rapidapi.com/search?q=${inputVal}&page=${page}&per_page=${perPage}`, options)
            .then(response => response.json())
            .then(response => setData(response.response.hits))
            .catch(err => console.error(err));
        handlePageCount()
    }, [inputVal, page, perPage]);

    const handlePageCount = () => {
        fetch(`https://genius.p.rapidapi.com/search?q=${inputVal}`, options)
            .then(response => response.json())
            .then(response => setPageCount(Math.ceil(response.response.hits.length / perPage)))
            .catch(err => console.error(err));
    }

    const handleInputChange = (e) => {
        setInputVal(e.target.value)
    }

    const handlePlaylistInputChange = (e) => {
        setListData(prev => ({
            ...prev,
            listName: e.target.value
        }))
    }

    const handleChangePerPage = (e) => {
        setPerPage(e.target.value)
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
        console.log(inputVal);
    }

    const handleAddToList = (newSong) => {
        const isExist = !!listData.songs.length && listData.songs.find(song => song.id === newSong.id);
        !isExist && (setListData((prev) => ({
            ...prev,
            songs: [...prev.songs, newSong]
        })))
    }

    const handleAddPlaylist = (data) => {
        dispatch(addPlaylist(data))
        setListData({
            listName: "",
            songs: []
        })
    }

    let arr = [];
    for (let i = 1; i <= pageCount; i++) {
        arr.push(i)
    }

    return (
        <div className='home-page container'>
            <div className='home-page__search'>
                <h2> Search for the song </h2>
                <SearchBox
                    handleInputChange={handleInputChange}
                    handleFormSubmit={handleFormSubmit}
                    inputVal={inputVal}
                />
                <SelectPerpage handleChangePerPage={handleChangePerPage} />
                <Songs
                    data={data}
                    handleAddToList={handleAddToList}
                    isAdded={false}
                />
                <Pagination arr={arr} setPage={setPage} />
            </div>
            <PlayList
                handlePlaylistInputChange={handlePlaylistInputChange}
                inputPlaylistVal={listData.listName}
                playList={listData}
                isAdded={true}
                addPlaylist={handleAddPlaylist} />

        </div>
    )
}

export default Home;