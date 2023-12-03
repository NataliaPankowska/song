import logo from './logo.svg';
import './App.css';
import SearchIcon from '@mui/icons-material/Search';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import PlayListBoard from './components/PlayListBoard';
import {useState, useEffect} from 'react';
import axios from 'axios';



const data = [
  {id: 1, title: "All I want form Christmas", artist: "Mariah Carrey", uri: 'q'},
  {id: 2, title: "Money", artist: "Pink Floyd", uri: 'w'},
  {id: 3, title: "My Way", artist: "Frank Sinatra", uri: 'e'},
  {id: 4, title: "Do Ani", artist: "Kazik Staszewski", uri: 'r'},
  {id: 5, title: "Summer wine", artist: "Nancy Sinatra", uri: 't'},
  {id: 6, title: "Twist in my sobriety", artist: "Tanita Tikkaram", uri: 'y'},

]
const CLIENT_ID = '33d982a0bddc4a1d9f72607284ec52c6';
const CLIENT_SECRET = '6906cdccc2ba4f078ab5097b4986d54b';
const REDIRECT_URI = 'http://localhost:3000/';
const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
const RESPONSE_TYPE = "token"; 
const scopes = ['playlist-modify-public', 'playlist-modify-private'];
const authorizeUrl = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${scopes.join('%20')}&response_type=token`;


function App() {
const [token, setToken] = useState('');

  const [searchInput, setSearchInput] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [tracks, setTracks] = useState([]);
  const [title, setTitle] = useState([])
  const [playList, setPlayList] = useState([]);
  const [list, setList] = useState([]);
  // const [uriList, setUriList] =useState([]);
  const [activeUris, setActiveUris] = useState([]);
    const [active, setActive] = useState('');
    const addList = (playList) => setList((prev) => [playList, ...prev])
    let activePlayList;
    const takeActive = () => {
        if(!active) return;
        activePlayList = list.find((element) => element.id === active);
        return activePlayList;
        
    }
console.log(active);
  useEffect(() => {
    
      setActiveUris(() => playList.filter(track => track.listId === active).map(song=> song.uri))
    
    
  }, [playList, active]);
  
  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem('token');

    if (!token && hash) {
      token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

      window.location.hash = ""
      window.localStorage.setItem("token", token)
  }

  setToken(token)
  
}, [] )


const logout = () => {
  setToken("")
  window.localStorage.removeItem("token")
}

useEffect(() => {
  if (!searchInput) return;
  const search = async () => {
    // e.preventDefault();
    const {data} = await axios.get("https://api.spotify.com/v1/search", {
      headers: {
          Authorization: `Bearer ${token}`
      },
      params: {
          q: searchInput,
          type: "track"
      }
  });
 setTracks(data.tracks.items);
 setTitle(tracks.map(track => track.name))

  };
  search();
}, [searchInput])

// useEffect(() => {
//   const savePlayList = async () => {
   
//     // const headers = {
//     //         Authorization: `Bearer ${token}`
//     //       };
//     const { data } = await axios.get('https://api.spotify.com/v1/me', {
//       headers: {
//           Authorization: `Bearer ${token}`
//       }});
//     console.log(data);
//     console.log(token)
//   }
  
//   savePlayList()
// }, [token])


  const savePlayList = async () => {
    const headers = {
      Authorization: `Bearer ${token}`
     
    };
    const headers2 = {
      // method: 'POST',
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    };

    
      const { data: { "id": userId } } = (await axios.get('https://api.spotify.com/v1/me', { headers }))

    console.log(userId);
    console.log(token);
try{    const addPlay = await fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, 
   { method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      name: takeActive().title,
      public: true,
      description: 'uytrdfcvbnm',
    }),}
      
      )
    //  .catch (error => console.log(error));

     const createdPlayList = await addPlay.json();

     const addTracks = await fetch(`https://api.spotify.com/v1/playlists/${createdPlayList.id}/tracks
        `, 
        {
        method: 'POST',
          
        headers: { 
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          uris: activeUris,
          position: 0
      })});
      const addesTracks = await addTracks.json();
    } catch (error){
        console.log(error)
      }
       
    



  //  const tracks = await axios.post(`https://api.spotify.com/v1/playlists/${addPlay.id}/tracks
  //  `, 
  //  {
  //   uris : activeUris,
  //   position: 0
  //  },
  //  { 
  // headers: { 
  //   Authorization: `Bearer ${token}`,
  //   'Content-Type': 'application/json'
  // }
  //  }
  //  ).catch(error => console.log(error));
    
  }
  

  





  useEffect(() => {
    
    const newResult =  tracks.filter((song) =>  {
      if(searchInput.length > 0){
        return song.name.toLowerCase().includes(searchInput.toLowerCase());
      }
    })
    setSearchResult(() => newResult);
  //  console.log(searchResult)
  }, [searchInput]);

  const add = (obj) => {
    setPlayList((prev) => {
      if(!playList.some((song) => song.id === obj.id)){
        if(active){
          return [{id: obj.id, title: obj.name, artist: obj.artists[0].name, listId: active, uri: obj.uri}, ...prev];

        } else {
          return <div> </div>
        }
      }else {
        return playList;
      }
    })
    // setUriList(() => playList.map((song) => song.uri))
  }


  const removeSong = (songIdToRemove) => {
    setPlayList(() => playList.filter((song) => song.id !== songIdToRemove));
    // setUriList(() => playList.map((song) => song.uri));
  }
// console.log('this is' + uriList)
  const removeList = (listIdToRemove) => {
    setList(() => list.filter((playList) => playList.id !== listIdToRemove));
  }

console.log(playList)
useEffect(() =>
{
  if(searchInput.length > 0){
    console.log(typeof tracks);
    console.log(tracks)
  } else{
    return
  }
  
}, [searchInput])
  

  

  
  return (
    <div className='body'>
      <div className='log'>
        { !token ?
           <a href={authorizeUrl}>Connect to Spotify</a>
          : <button onClick={logout}>log out</button>
        }
      </div>
      <div className='search-part'>
      <SearchBar 
      onType={setSearchInput} 
      
      // onSubmit={search}
       />
      <SearchResults result={searchResult} add={add} />
      </div>
      <PlayListBoard 
      className="playlist-board"
      songs={playList} 
      add={addList} 
      active={active} 
      setActive={setActive}
      list={list}
      takeActive={takeActive()}
      remove={removeSong}
      removeList={removeList}
      addToSpotify={savePlayList}
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
