//always return the new state
import {ADD_ANIME,ADD_FAVOURITE,REMOVE_FROM_FAVOURITE,DISPLAY_FAVOURITE} from '../actions';
const initialAnimeState = {
    list: [],
    favourites: [],
    showFavourites:false
}
export default function animes(state=initialAnimeState,action){

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
                animes=>animes.Title!=action.anime.Title
            );
            return {...state,favourites:filteredArray};
        case DISPLAY_FAVOURITE:
            return { 
                ...state,
                showFavourites: action.val
            };
        default:
            return state;

    }
}

//UI se add movies ka option woh action par bhejega action
//[m1,m2] movie add karega aur reducer par bhejega woh ye new 
//state store ko bhejega jo usey add kardega db mai orginial
//state ke saath