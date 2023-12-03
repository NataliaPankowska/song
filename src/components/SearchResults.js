import React from 'react';
import './SearchResults.css';
import AddIcon from '@mui/icons-material/Add';

function SearchResults({result, add}) {
  

const addItem = (item) => add(item);
return (
    <>
    {
        result.length != 0 && (
    <div className="results">

        {result.map((song) => 
            <div className='result-container' onClick={() => addItem(song)}>
                <div className='result'>
               
                <h2>{song.name}</h2>
                <h3>{song.artists[0].name}</h3>
                </div>
               
                {/* <button onClick={() => addItem(song)}>Add</button> */}
                <AddIcon className='add-button' onClick={() => addItem(song)}/>
            </div>
        )}
        
    </div>
    )
    }
    </>
)
}
export default SearchResults;