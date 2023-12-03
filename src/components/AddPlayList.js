import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import {useState} from 'react';
import './AddPlayList.css';
import AddIcon from '@mui/icons-material/Add';

function AddPlayList({addPlayList}){
const [showInput, setShowInput] = useState(false);
const [input, setInput] = useState('');

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
    <div className="add-play-list-container">
        
        <button className="add-playlist-button" onClick={handleClick}>Add Playlist</button>
        {/* <AddIcon className="add-playlist-button" onClick={handleClick}/> */}
        { showInput && (
            <form onSubmit={handleSubmit}>
                <input className='playlist-input' value={input} type='text' onChange={handleInputChange}/>
                <input className='add-playlist' type="submit" value='add'/>
                
               
            </form>
        )}  
         
    </div>
)
}

export default AddPlayList;