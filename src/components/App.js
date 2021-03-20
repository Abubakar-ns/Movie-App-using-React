import React from 'react';
import {Animedata} from '../Animedata';
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
            {Animedata.map(anime=>(
              <Moviecard anime = {anime}/>
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
