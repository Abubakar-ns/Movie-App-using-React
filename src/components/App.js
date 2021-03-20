import React from 'react';
import {animedata} from '../Animedata';
import Navbar from './Navbar';
import {addAnime} from '../actions';
import Moviecard from './MovieCard';

class App extends React.Component {
  componentDidMount(){
    const {store} = this.props; //destructuring
    store.subscribe(()=>{
      console.log('UPDATED');
      this.forceUpdate(); //do not use usually
    })
    //make api call
    //dispatch action
     store.dispatch(addAnime(animedata));
    console.log('State',store.getState());
  }
  isFavouriteAnime=(anime)=>{
      const {favourites} = this.props.store.getState();
      const index= favourites.indexOf(anime);
        if(index!==-1){
          //found the movie in favourties
          return true;
        }
        return false;
  }
  
  render(){
    const {list} = this.props.store.getState(); //{list:[],favourites:[]}
  // const animes = this.props.store.getState(); //stae:[]
  
  console.log('Render',this.props.store.getState());
  return (
    <div className="App">
      <Navbar/>
      <div className="main">
        <div className="tabs">
          <div className="tab" onClick={this.renanime}>Anime</div>
          <div className="tab">Favourites</div>
        </div>
        <div className="List">
            {list.map((anime,index)=>(
              <Moviecard 
              anime = {anime} 
              key={`anime-${index}`} 
              dispatch={this.props.store.dispatch}
              isFavourite={this.isFavouriteAnime(anime)}
              />
            ))}
        </div>
        {/* <div className="List">
            {favourite1.map((anime,index)=>(
              <Moviecard 
              anime = {anime} 
              key={`anime-${index}`} 
              dispatch={this.props.store.dispatch}
              isFavourite={this.isFavouriteAnime(anime)}
              />
            ))}
        </div> */}
      </div>
    </div>
  );
  }
}

export default App;
