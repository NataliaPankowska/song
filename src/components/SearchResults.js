import React from 'react';
import './SearchResults.css';

function SearchResults({result, add}) {
  

const addItem = (item) => add(item);
return (
    <>
    {
        result.length != 0 && (
    <div className="results">

        {result.map((song) => 
            <div>
                <h3>{song.name}</h3>
                <h3>{song.artists[0].name}</h3>
                <button onClick={() => addItem(song)}>Add</button>
            </div>
        )}
        
    </div>
    )
    }
    </>
)
}
export default SearchResults;