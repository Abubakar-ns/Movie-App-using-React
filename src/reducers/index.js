//always return the new state

import { combineReducers } from 'redux';
import {
    ADD_ANIME,
    ADD_FAVOURITE,
    REMOVE_FROM_FAVOURITE,
    DISPLAY_FAVOURITE,
    ADD_SEARCH_RESULT,
    ADD_TO_ANIME_LIST,
} from '../actions/index';
const initialAnimeState = {
    list: [],
    favourites: [],
    showFavourites:false
}
export function animes(state=initialAnimeState,action){
    console.log('ANIME REDUCERS');
    //in the react community if else state is usually avoided because its not nice and doesnt look good ? bruh
//     //state same rehra we are not changing the state
//    if(action.type===ADD_ANIME){ 
//        const newList = { ...state,list:action.animes};
//        return newList;
//    } 

//    return state;
//we use switch cases
    switch(action.type){
        case ADD_ANIME:
            return { ...state,list:action.animes};
        case ADD_FAVOURITE:
            return { ...state,favourites:[action.anime,...state.favourites]};
        case REMOVE_FROM_FAVOURITE:
            const filteredArray=state.favourites.filter(
                animes=>animes.Title!==action.anime.Title
            );
            return {...state,favourites:filteredArray};
        case DISPLAY_FAVOURITE:
            return { 
                ...state,
                showFavourites: action.val
            };
        case ADD_TO_ANIME_LIST : 
        
        state.list.forEach(anime => {
            if(anime.title === action.anime.title){
                return state;
            }
            });
        return{
            ...state,
            list : [action.anime , ...state.list]
        }
        default:
            return state; 

    }
}

//UI se add movies ka option woh action par bhejega action
//[m1,m2] movie add karega aur reducer par bhejega woh ye new 
//state store ko bhejega jo usey add kardega db mai orginial
//state ke saath


//Search Reducer
const intitialSearchState = {
    result:{},
    showSearchResults : false
};

export function search ( state = intitialSearchState , action){

    switch(action.type){
        case ADD_SEARCH_RESULT :
            return {
                ...state,
                result : action.anime,
                showSearchResults : true
            }
        case ADD_TO_ANIME_LIST : 
            return{
                ...state,
               showSearchResults :false
            }
        default :
            return state 

    }
}
// const initialRootState={
//     animes: initialAnimeState,
//     search: intitialSearchState
// }
// export default function rootReducer(state=initialRootState,action){
//     return {
//         animes: animes(state.animes,action),
//         search: search(state.search,action),
//     }
// }
//Is RootReducer a key word in combinereducers??
export default combineReducers({
    animes,
    search
});