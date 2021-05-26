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
export const ADD_SEARCH_RESULT = "ADD_SEARCH_RESULT";
export const ADD_TO_ANIME_LIST = "ADD_TO_ANIME_LIST";
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

//api
export function handleAnimeSearch (title){
    const url = `https://api.jikan.moe/v3/search/anime?q=${title}&limit=1`;
    //async action but actions are synchronous so we made a middleware thunk
    console.log('url',url);
    return function(dispatch){
        fetch(url)
        .then(response => response.json())
        .then(anime=>{
            console.log('anime',anime);
            dispatch(addAnimeSearchResult(anime));
            
        })
    }
   
}
export function addAnimeSearchResult(anime){
    return {
        type : ADD_SEARCH_RESULT,
        anime
    }
}

export function addToAnimeList(anime){
    return {
        type : ADD_TO_ANIME_LIST,
        anime
    }
}