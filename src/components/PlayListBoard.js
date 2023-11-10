import React from 'react';
import AddPlayList from './AddPlayList';
import NewPlayList from './NewPlayList';
import PlayList from './PlayList';
import {useState, useEffect} from 'react';

function ListOfPlayList({songs, add, active, setActive, list, takeActive, remove, removeList}) {
    
    // const [title, setTitle] = useState( takeActive.title);
   
  
    // useEffect(() => setTitle(takeActive.title), [active]);
    const handleNameChange = (name, id) => {
        if(takeActive.id === id){
            takeActive.title = name;
        }
        
        
    }
   
    // const handleNameChange = (name) => setTitle(name);
    return (
        <div>
            <AddPlayList addPlayList={add}/>
            <div>
                {list.map(element => 
                    <NewPlayList playList={element} active={active} setActive={setActive} onChange={handleNameChange} removeList={removeList}/>
                )}
            </div>
            <div>
                <PlayList songs={songs} active={takeActive} remove={remove} />
            </div>
        </div>   
 )
}

export default ListOfPlayList;