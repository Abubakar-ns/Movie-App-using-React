// {
//     type: 'ADD_MOVIES',
//    movies:[m1,m2,m3];
// }
// {
//     type: 'DECREASE_COUNT',
// }

//action types
export const ADD_ANIME = 'ADD_ANIME';
//action creaters

export function addAnime (animes){
    return {
        type: ADD_ANIME,
        animes //shorthand
    }
}