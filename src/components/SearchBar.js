import React from 'react';

function SearchBar({onType}) {
    
    return (
        <div>
            <form>
                <input onChange={(e) => onType(e.target.value)}/>
            </form>
        </div>
    )
}

export default SearchBar;