import React from 'react';
import './NewPlayList.css';
import {useState} from 'react';
import { v1 as uuidv1 } from 'uuid';
function NewPlayList({playList, active, setActive, onChange, removeList}) {
    
    const [input, setInput] = useState('');
    const [isInput, setIsInput] = useState(false);

    const handleEdit = () => setIsInput(true);
     const handleChange = (e) => setInput(e.target.value);

     const id = active;
    const handleRemoveList = () => removeList(playList.id);
   
    const handleSubmit = () => {
        // playList.title = input;
        onChange(input, id);
        setIsInput(false);
    }
    

   
    
    return(
        <div className={`new-play-list ${playList.id === active && 'active'}`} onClick={() => setActive(playList.id)}>
            {isInput=== false ? <strong>{playList.title}</strong> : <input value={input} type='text' onChange={handleChange}/>}
            <button onClick={isInput === false ? handleEdit : handleSubmit}>Edit</button>
            <button onClick = {handleRemoveList}>&times;</button>
        </div>
    )
}

export default NewPlayList;