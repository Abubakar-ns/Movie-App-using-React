
import React from 'react';

class MovieCard extends React.Component {
    render(){
        const { anime } = this.props;
        return (
            <div className="movie-card">
              <div className="left">
                  <img alt="movie-poster" src={anime.Poster}/>
              </div>
              <div className="right">
                  <div className="title">{anime.Title}</div>
                  <div className="plot"><span>Rank-{anime.Rank}</span></div>
                  <div className="plot"><span>Episodes-</span>{anime.Episodes}</div>
                  <div className="plot"><span>Type-</span>{anime.Type}</div>
                  

                  <div className="footer">
                  <div className="rating">{anime.Released}</div>
                  <div className="rating"><span>Members-</span>{anime.Members}</div>
                  <div className="rating">{anime.Score}</div>
                  <button className="favourite-btn">Favourtie</button>
                  </div>
                  
              </div>
            </div>
          );
    }
  
}

export default MovieCard