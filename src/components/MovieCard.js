import React from 'react';
import { addFavourite } from '../actions';

class MovieCard extends React.Component {
    handleFavouriteClick=()=>{
        const {anime}=this.props;
        this.props.dispatch(addFavourite(anime));
    }
    handleUnFavouriteClick=()=>{
        // const {anime}=this.props;
        // const {favourites} = this.props.store.getState();
        // const index= favourites.indexOf(anime);
        // const items = items.filter((anime)=>favourites.index!==index);
        // items=favourites;
        
    }
    
    render(){
        const { anime ,isFavourite } = this.props;
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
                  {isFavourite
                  ?<button className="unfavourite-btn" onClick={this.handleUnFavouriteClick}>Unfavourite</button>
                  :<button className="favourite-btn" onClick={this.handleFavouriteClick}>Favourite</button>}
                  
                  </div>
                  
              </div>
            </div>
          );
    }
  
}

export default MovieCard