import React from 'react';

import './index.css';

function SearchBox({ handleFormSubmit, inputVal, handleInputChange, isAdded }) {

    return (
        <form onSubmit={handleFormSubmit}>

            <input
                value={inputVal}
                type='text'
                onChange={handleInputChange}
            />

         {  !isAdded&& <button type="submit">Find</button>}
        </form>
    )
}

export default SearchBox;