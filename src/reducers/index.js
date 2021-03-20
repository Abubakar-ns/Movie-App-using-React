//always return the new state
import {ADD_ANIME} from '../actions';
const initialAnimeState = {
    list: [],
    favourites: []
}
export default function animes(state=initialAnimeState,action){
    //state same rehra we are not changing the state
   if(action.type===ADD_ANIME){ 
       const newList = { ...state,list:action.animes};
       return newList;
   } 

   return state;
}

//UI se add movies ka option woh action par bhejega action
//[m1,m2] movie add karega aur reducer par bhejega woh ye new 
//state store ko bhejega jo usey add kardega db mai orginial
//state ke saath