import React from 'react';
import './SearchBar.css';
import SearchIcon from '@mui/icons-material/Search';

function SearchBar({onType}) {
    
    return (
        <div className='container'>
            <form className='search'>
                <input  onChange={(e) => onType(e.target.value) } type='text' placeholder='search'/>
                <SearchIcon  className='search-icon'/>
            </form>
        </div>
    )
}

export default SearchBar;