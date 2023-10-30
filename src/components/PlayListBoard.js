import React from 'react';
import AddPlayList from './AddPlayList';
import NewPlayList from './NewPlayList';
import PlayList from './PlayList';
import {useState} from 'react';

function ListOfPlayList({songs, add, active, setActive, list, takeActive}) {
    
    
  
    return (
        <div>
            <AddPlayList addPlayList={add}/>
            <div>
                {list.map(element => 
                    <NewPlayList playList={element} active={active} setActive={setActive}/>
                )}
            </div>
            <div>
                <PlayList songs={songs} active={takeActive}/>
            </div>
        </div>   
 )
}

export default ListOfPlayList;