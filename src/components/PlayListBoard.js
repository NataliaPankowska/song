import React from 'react';
import AddPlayList from './AddPlayList';
import NewPlayList from './NewPlayList';
import PlayList from './PlayList';
import {useState, useEffect} from 'react';
import './PlayListBoard.css'

function ListOfPlayList({songs, add, active, setActive, list, takeActive, remove, removeList, addToSpotify}) {
    
    // const [title, setTitle] = useState( takeActive.title);
   
  
    // useEffect(() => setTitle(takeActive.title), [active]);
    const handleNameChange = (name, id) => {
        if(takeActive.id === id){
            takeActive.title = name;
        }
        
        
    }
   
    // const handleNameChange = (name) => setTitle(name);
    return (
        <div className='board-container'>
        <div className='board'>
            {/* <h1>Playlists</h1> */}
            <AddPlayList addPlayList={add}/>
            <div>
                {list.map(element => 
                    <NewPlayList className='new-playlist' playList={element} active={active} setActive={setActive} onChange={handleNameChange} removeList={removeList}/>
                )}
            </div>
            <div>
                <PlayList className='playlist' songs={songs} active={takeActive} remove={remove} addToSpotify={addToSpotify}/>
            </div>
        </div>   
        </div>
 )
}

export default ListOfPlayList;