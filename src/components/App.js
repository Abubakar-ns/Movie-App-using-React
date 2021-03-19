import React from 'react';
import {animedata} from '../animedata';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
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
            {animedata.map(anime=>(
              <MovieCard anime = {anime}/>
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
