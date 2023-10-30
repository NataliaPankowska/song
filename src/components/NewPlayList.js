import React from 'react';
import './NewPlayList.css';
import {useState} from 'react';
function NewPlayList({playList, active, setActive}) {
    
    return(
        <div className={`new-play-list ${playList.id === active && 'active'}`} onClick={() => setActive(playList.id)}>
            <strong>{playList.title}</strong>
            <button>&times;</button>
        </div>
    )
}

export default NewPlayList;