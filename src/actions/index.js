import axios from 'axios';
import {CLIENT_ID} from '../constant/constant.js';
export const FETCH_PLAYLIST = 'FETCH_PLAYLIST';
export const PLAY_SONG = 'PLAY_SONG';
export const ON_SEARCH = 'ON_SEARCH';
//const baseurl ='https://api.soundcloud.com/users/185676792/favorites';
const searchurl = 'https://api.soundcloud.com/tracks/185676792/favorites';
const baseUrl=`https://api.soundcloud.com/tracks?linked_partitioning=1&client_id=${CLIENT_ID}&limit=60&offset=0`


export function playList(){
    const url=`${baseUrl}&tags=house`;
    const request =axios.get(url);
    request.key = 'house';
    return{
        type:FETCH_PLAYLIST,
        meta:{key:'house'},
        payload:request,
        //key:'house'
    }
}

export function searchSong(searchTerm){
    console.log(searchTerm);
    const url=`${baseUrl}&q=${searchTerm}`;
    const request =axios.get(url);
    return{
        type:FETCH_PLAYLIST,
        payload:request,
        meta:{key:searchTerm}

    }
}
