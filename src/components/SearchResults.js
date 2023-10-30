import React from 'react';
import './SearchResults.css';

function SearchResults({result, add}) {
  

const addItem = (item) => add(item);
return (
    <div className="results">
        {result.map((song) => 
            <div>
                <h3>{song.title}</h3>
                <h3>{song.artist}</h3>
                <button onClick={() => addItem(song)}>Add</button>
            </div>
        )}
        
    </div>
)
}
export default SearchResults;