import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import './index.css';
import App from './components/App';
import animes from './reducers';


const store = createStore(animes);
console.log('store',store);
console.log('Before State',store.getState());


store.dispatch({
  type: 'ADD_MOVIES',
  animes: [{name: 'Jujutsu Kaisen'}]
});
console.log('After State',store.getState());
ReactDOM.render(<App />,document.getElementById('root'));


