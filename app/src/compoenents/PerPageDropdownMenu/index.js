import React from 'react'

function SelectPerpage({handleChangePerPage}) {
    return (
        <div>
            <select name="perPage" id="" onChange={handleChangePerPage}>
                <option value={3} >
                    3
                </option>
                <option value={10} >
                    10
                </option>
                <option value={15} >
                    15
                </option>
            </select>
        </div>
    )
}

export default SelectPerpage;