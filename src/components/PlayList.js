import React from 'react';
import Track from './Track.js';
import SaveToSpotify from './SaveToSpotify.js';


import {useState} from 'react';

function PlayList({songs, active, remove}) {

if(!active) return <div></div>
return (
    <div>
        <div>{active.title}</div>
        
    <div>
        {songs.map((song) => {
            if(song.listId === active.id) {
             return   (
                    <Track title={song.title} artist={song.artist} id={song.id} remove={remove} />
                    )
            }
           
        }
       
        
        
        )}
        
    </div>
    <div>
        <SaveToSpotify />
    </div>
    
    
    
    </div>
    
)
}

export default PlayList;