import React from 'react';
import {animedata} from '../Animedata';
import Navbar from './Navbar';
import Moviecard from './MovieCard';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="main">
        <div className="tabs">
          <div className="tab">Anime</div>
          <div className="tab">Favourites</div>
        </div>
        <div className="List">
            {animedata.map((anime,index)=>(
              <Moviecard anime = {anime} key={`anime-${index}`}/>
            ))}
            {/* {data.map(movie=>(
              <MovieCard movie = {movie}/>
            ))} */}
        </div>
      </div>
    </div>
  );
}

export default App;
