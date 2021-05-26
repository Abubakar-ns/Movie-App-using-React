import ReactDOM from 'react-dom';
import { createStore , applyMiddleware } from 'redux';

import thunk from 'redux-thunk';

import './index.css';
import App from './components/App';
import {Provider} from 'react-redux';
import rootReducer from './reducers';

// import { act } from 'react-dom/test-utils';
//obj will contain two properties dispatch and action
// this is the curries form of logger with fucntion(obj,next,action)
//logger(obj)(next)(action)
// const logger = function({dispatch,getState}){
//     //what next is??
//     //next middle ware or dipatch
//     return function(next){
//         return function (action){
//             //middleware code
//             console.log('ACTION_TYPE =',action.type);
//             next(action);
//         }
//     }
// }
const logger = ({dispatch,getState})=>(next)=>(action)=>{
    if(typeof action !=='function'){
        console.log('ACTION_TYPE= ',action.type);  
    }
    next(action);
    
}
// const thunk = ({dispatch,getState})=>(next)=>(action)=>{
//     if(typeof action =='function'){
//         action(dispatch);
//         return;
//     }
//     next(action);
// }
const store = createStore(rootReducer,applyMiddleware(logger,thunk));
console.log('store',store);
//create a store context
// export const StoreContext=createContext();
//provider consumer
// console.log('context',StoreContext);
// class Provider extends React.Component{
//     render(){
//         const {store} =this.props;
//         return <StoreContext.Provider value={store}>
//             {this.props.children}
//         </StoreContext.Provider>
//     }
// }
//const connectComponent=connect(callback)(App);
// export function connect (callback){
//     return function (Component){
//         class ConnectedComponent extends React.Component{
//             constructor(props){
//                 super(props);
//                 this.unsubscribe=this.props.store.subscribe(()=>this.forceUpdate());
//             }
//             componentWillUnmount(){
//                 this.unsubscribe();
//             }
//             render(){
//                 const {store}=this.props;
//                 const state =store.getState();
//                 const dataToBePassedAsProps=callback(state);
//                 return(
//                     <Component
//                     {...dataToBePassedAsProps}
//                     dispatch={store.dispatch}
//                     />
//                 ) ;
                      
//             }
//         };
//         class ConnectedComponentWrapper extends React.Component{
//             render (){
//                 return (
//                     <StoreContext.Consumer>
//                         {(store) => <ConnectedComponent store={store} />}
//                     </StoreContext.Consumer>
//                 )
//             };
            
//         }
//         return ConnectedComponentWrapper;
//     };
// }


ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
,document.getElementById('root'));


//api to search <https://api.jikan.moe/v3/search/anime?q={name of anime with out curly brackets}>
//query & to limit it to 1
//<https://api.jikan.moe/v3/search/anime?q={name of anime with out curly brackets}&limit={limit without curly brackets}>