import logo from './logo.svg';
import './App.css';
import SearchIcon from '@mui/icons-material/Search';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import PlayListBoard from './components/PlayListBoard';
import {useState, useEffect} from 'react';

const data = [
  {id: 1, title: "All I want form Christmas", artist: "Mariah Carrey"},
  {id: 2, title: "Money", artist: "Pink Floyd"},
  {id: 3, title: "My Way", artist: "Frank Sinatra"},
  {id: 4, title: "Do Ani", artist: "Kazik Staszewski"},
  {id: 5, title: "Summer wine", artist: "Nancy Sinatra"},
  {id: 6, title: "Twist in my sobriety", artist: "Tanita Tikkaram"},

]

function App() {
  const [searchInput, setSearchInput] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [playList, setPlayList] = useState([]);
  const [list, setList] = useState([]);
    const [active, setActive] = useState(false);
    const addList = (playList) => setList((prev) => [playList, ...prev])
    let activePlayList;
    const takeActive = () => {
        activePlayList = list.find((element) => element.id === active);
        return activePlayList;
        
    }

  useEffect(() => {
    const newResult = data.filter((song) =>  {
      if(searchInput.length > 0){
        return song.title.toLowerCase().includes(searchInput.toLowerCase());
      }
    })
    setSearchResult(() => newResult);
   
  }, [searchInput]);

  const add = (obj) => {
    setPlayList((prev) => {
      if(!playList.some((song) => song.id === obj.id)){
        if(active){
          return [{id: obj.id, title: obj.title, artist: obj.artist, listId: activePlayList.id}, ...prev];

        } else {
          return <div></div>
        }
      }else {
        return playList;
      }
    })
  }
  console.log(playList);
  
  return (
    <div>
      <SearchBar onType={setSearchInput}/>
      <SearchResults result={searchResult} add={add}/>
      <PlayListBoard 
      songs={playList} 
      add={addList} 
      active={active} 
      setActive={setActive}
      list={list}
      takeActive={takeActive()}
      />
      
      {/* { 
        searchResult.map((song) => 
        <button onClick={() => add(song)}>{song.title}</button>
        )
      } */}
      
    </div>
  );
}

export default App;
