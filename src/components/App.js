import React from 'react';
import {animedata} from '../Animedata';
import Navbar from './Navbar';
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
    store.dispatch({
        type: 'ADD_MOVIES',
        animes: animedata
    });
    console.log('State',store.getState());
  }
  render(){
  const anime = this.props.store.getState();
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
        </div>
      </div>
    </div>
  );
  }
}

export default App;
