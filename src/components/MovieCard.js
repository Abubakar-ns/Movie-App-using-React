import React from 'react';
import { addFavourite , removefromFavourite} from '../actions';

class MovieCard extends React.Component {
    handleFavouriteClick=()=>{
        const {anime}=this.props;
        this.props.dispatch(addFavourite(anime));
    }
    handleUnFavouriteClick=()=>{
        const {anime}=this.props;
        this.props.dispatch(removefromFavourite(anime));  
    }
    
    render(){
        const { anime ,isFavourite } = this.props;
        return (
            <div className="movie-card">
              <div className="left">
                  <img alt="movie-poster" src={anime.image_url}/>
              </div>
              <div className="right">
                  <div className="title">{anime.title}</div>
                  <div className="plot"><span>Episodes-</span>{anime.episodes}</div>
                  <div className="plot"><span>Type-</span>{anime.type}</div>
                  

                  <div className="footer">
                  {/* <div className="rating">{anime.start_date}</div> */}
                  <div className="rating"><span>Members-</span>{anime.members}</div>
                  <div className="rating">{anime.score}</div>
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