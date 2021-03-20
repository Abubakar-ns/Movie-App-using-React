//always return the new state
export default function animes(state=[],action){
    //state same rehra we are not changing the state
   if(action.type==='ADD_MOVIES'){
       return action.animes;
   } 

   return state;
}
//UI se add movies ka option woh action par bhejega action
//[m1,m2] movie add karega aur reducer par bhejega woh ye new 
//state store ko bhejega jo usey add kardega db mai orginial
//state ke saath