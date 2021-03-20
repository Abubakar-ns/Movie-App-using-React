// {
//     type: 'ADD_MOVIES',
//    movies:[m1,m2,m3];
// }
// {
//     type: 'DECREASE_COUNT',
// }

//action types
export const ADD_ANIME = 'ADD_ANIME';
export const ADD_FAVOURITE = 'ADD_FAVOURITE';
export const REMOVE_FROM_FAVOURITE = 'REMOVE_FROM_FAVOURITE';
export const DISPLAY_FAVOURITE = 'DISPLAY_FAVOURITE';
//action creaters

export function addAnime (animes){
    return {
        type: ADD_ANIME,
        animes //shorthand
    }
};
// a single anime need to be added to favourite at a time
export function addFavourite (anime){
    return {
        type: ADD_FAVOURITE,
        anime //shorthand
    }
}
export function removefromFavourite (anime){
    return {
        type: REMOVE_FROM_FAVOURITE,
        anime //shorthand
    }
}
export function displayFavourite (val){
    
    return {
        type: DISPLAY_FAVOURITE,
        val:val
    }
}