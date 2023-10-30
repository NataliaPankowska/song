import React from 'react';


import {useState} from 'react';

function PlayList({songs, active}) {

if(!active) return <div></div>
return (
    <div>
        <div>{active.title}</div>
    <div>
        {songs.map((song) => {
            if(song.listId === active.id) {
             return   (
                    <div>
                    <h1>{song.title}</h1>
                    </div>
                    )
            }
           
        }
       
        
        
        )}
        
    </div>
    
    
    
    </div>
    
)
}

export default PlayList;