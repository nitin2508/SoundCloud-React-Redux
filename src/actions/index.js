import axios from 'axios';
import {CLIENT_ID} from '../constant/constant.js';
import store from '../index'
export const FETCH_PLAYLIST = 'FETCH_PLAYLIST';
export const PLAY_SONG = 'PLAY_SONG';
export const ON_SEARCH = 'ON_SEARCH';
export const ON_SCROLL = 'ON_SCROLL';
export const IS_FETCHING = 'IS_FETCHING';
//const baseurl ='https://api.soundcloud.com/users/185676792/favorites';
const searchurl = 'https://api.soundcloud.com/tracks/185676792/favorites';
const baseUrl=`https://api.soundcloud.com/tracks?linked_partitioning=1&client_id=${CLIENT_ID}&limit=60&offset=0`


export function playList(){
    //changeStateIsFetching();
    console.log(store);
    const url=`${baseUrl}&tags=bollywood`;
    const request =axios.get(url);
    request.key = 'house';
    return{
        type:FETCH_PLAYLIST,
        meta:{key:'house'},
        payload:request,
    }
}

export function searchSong(searchTerm){
    changeStateIsFetching();
    const url=`${baseUrl}&q=${searchTerm}`;
    const request =axios.get(url);
    return{
        type:FETCH_PLAYLIST,
        payload:request,
        meta:{key:searchTerm}

    }
}

export function loadPlaylistOnScroll(url){
    changeStateIsFetching();
    const request =axios.get(url);
    return{
        type:ON_SCROLL,
        payload:request,
    }
}

function changeStateIsFetching(){
    store.dispatch({
        type:IS_FETCHING
    })
}
