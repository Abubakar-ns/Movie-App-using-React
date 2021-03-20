import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import './index.css';
import App from './components/App';
import animes from './reducers';


const store = createStore(animes);
console.log('store',store);
ReactDOM.render(<App />,document.getElementById('root'));


