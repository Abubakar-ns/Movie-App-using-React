import {connect} from 'react-redux';
import React from 'react';
import {addToAnimeList,handleAnimeSearch} from '../actions/index';

class Navbar extends React.Component {
  constructor(props){
      super(props);
      this.state = {
          searchText: ''
      };
  }
  handleAddAnime = (anime)=>{
    this.props.dispatch(addToAnimeList(anime));
  }
  handleSearch=()=>{
    const {searchText}=this.state; 
    this.props.dispatch(handleAnimeSearch(searchText));
  }
  handleChange=(e)=>{
    this.setState({
      searchText: e.target.value
    });
  }

    render(){
      const {result:anime,showSearchResults} = this.props.search;
        return (
            <div className="nav">
              <div className="search-container">
                  <input onChange={this.handleChange}/>
                  <button id="search-btn" onClick={this.handleSearch}>Search</button>
                  { showSearchResults &&
                  <div className='search-results'>
                      <div className='search-result'>
                          <img src={anime.results[0].image_url} alt='AnimePoster'/>
                          <div className='movie-info'>
                          <span>
                              {anime.results[0].title}
                          </span>
                          <button className='search-btn' onClick={()=>{this.handleAddAnime(anime.results[0])}}>
                              ADD TO ANIMES
                          </button>
                      </div>
                      </div>
                      
                  </div>
                  }
              </div>
            </div>
          );
    }
  
}

// class NavbarWrapper extends React.Component{
//   render(){
//     return (
//       <StoreContext.Consumer>
//         {(store)=> <Navbar dispatch={store.dispatch} search={this.props.search}/>}
//         </StoreContext.Consumer>
//     )
//   }
// }
function mapStateToProps({search}){
  return {
    search
  }
};

export default connect(mapStateToProps)(Navbar);

