import React from 'react';
import {connect} from 'react-redux';
import {animedata} from '../Animedata';
import Navbar from './Navbar';
import {addAnime,displayFavourite} from '../actions';
import Moviecard from './MovieCard';



class App extends React.Component {
  componentDidMount(){
    this.props.dispatch(addAnime(animedata));
  }
  isFavouriteAnime=(anime)=>{
      const {animes} = this.props;
      const index= animes.favourites.indexOf(anime);
        if(index!==-1){ 
          //found the movie in favourties
          return true;
        }
        return false;
  }
  changeTab=(val)=>{
    this.props.dispatch(displayFavourite(val))
  }
  render(){
    const {animes,search} = this.props;
    const {list,favourites,showFavourites} = animes; //{list:[],favourites:[]}
  // const animes = this.props.store.getState(); //stae:[]
  
  console.log('Render',this.props);
  const displayAnime= showFavourites?favourites:list;
  return (
    <div className="App">
      <Navbar  search={search}/>
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
              dispatch={this.props.dispatch}
              isFavourite={this.isFavouriteAnime(anime)}
              />
            ))}
        </div> 
        
      </div>
    </div>
  );
  }
}
//just a wrapper with store as context(prop) everything is wrapped around storecontext instead of putting indivudually on everything
// class AppWrapper extends React.Component{
//   render(){
//     return (
//       <StoreContext.Consumer>
//         {(store)=> <App store={store}/>}
//         </StoreContext.Consumer>
//     )
//   }
// }
function mapStateToProps(state){
    return {
      animes: state.animes,
      search: state.animes
    }
};
const connectedAppComponent=connect(mapStateToProps)(App);
export default connectedAppComponent;
