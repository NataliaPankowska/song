import React from 'react';

function Track({ title, artist, remove, id }){
    const handleClick = () => remove(id);
    
    return (
        <div>
            <h3>{title}</h3>
            <h3>{artist}</h3>
            <button onClick={handleClick}>&times;</button>
        </div>
    )
}

export default Track;