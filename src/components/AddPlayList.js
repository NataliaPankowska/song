import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import {useState} from 'react';

function AddPlayList({addPlayList}){
const [showInput, setShowInput] = useState(false);
const [input, setInput] = useState('')
;
const handleClick = () => setShowInput(true);
const handleInputChange = ({target}) => setInput(target.value);
const handleSubmit = (e) => {
    e.preventDefault();
    const playList = {
        id: uuidv4(),
        title: input
    }
    addPlayList(playList);
    setInput('');
    setShowInput(false);
}
return (
    <div>
        <button onClick={handleClick}>Add a new Playlist</button>
        { showInput && (
            <form onSubmit={handleSubmit}>
                <input value={input} type='text' onChange={handleInputChange}/>
                <input type="submit" value="add"/>
            </form>
        )}      
    </div>
)
}

export default AddPlayList;