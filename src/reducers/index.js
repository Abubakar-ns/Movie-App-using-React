//always return the new state
import {ADD_ANIME,ADD_FAVOURTIE} from '../actions';
const initialAnimeState = {
    list: [],
    favourites: []
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
        case ADD_FAVOURTIE:
            return { ...state,favourites:[action.anime,...state.favourites]};
        default:
            return state;

    }
}

//UI se add movies ka option woh action par bhejega action
//[m1,m2] movie add karega aur reducer par bhejega woh ye new 
//state store ko bhejega jo usey add kardega db mai orginial
//state ke saath