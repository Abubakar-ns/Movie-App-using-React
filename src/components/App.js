import React from 'react';
import {animedata} from '../Animedata';
import Navbar from './Navbar';
import {addAnime,displayFavourite} from '../actions';
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
      const {animes} = this.props.store.getState();
      const index= animes.favourites.indexOf(anime);
        if(index!==-1){ 
          //found the movie in favourties
          return true;
        }
        return false;
  }
  changeTab=(val)=>{
    this.props.store.dispatch(displayFavourite(val))
  }
  render(){
    const {animes} = this.props.store.getState();
    const {list,favourites,showFavourites} = animes; //{list:[],favourites:[]}
  // const animes = this.props.store.getState(); //stae:[]
  
  console.log('Render',this.props.store.getState());
  const displayAnime= showFavourites?favourites:list;
  return (
    <div className="App">
      <Navbar/>
      <div className="main">
        <div className="tabs">
          <div className={`tab ${(showFavourites?'':'active-tabs')}`} onClick={()=> this.changeTab(false)}>Anime</div>
          <div className={`tab ${(showFavourites?'active-tabs':'')}`} onClick={()=> this.changeTab(true)}>Favourites</div>
        </div>
        <div className="List">
            {displayAnime.map((anime,index)=>(
              <Moviecard 
              anime = {anime} 
              key={`anime-${index}`} 
              dispatch={this.props.store.dispatch}
              isFavourite={this.isFavouriteAnime(anime)}
              />
            ))}
        </div>
        
      </div>
    </div>
  );
  }
}

export default App;
