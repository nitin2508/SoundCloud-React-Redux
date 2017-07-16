import axios from 'axios';
import {CLIENT_ID} from '../constant/constant.js';
export const FETCH_PLAYLIST = 'FETCH_PLAYLIST';
export const PLAY_SONG = 'PLAY_SONG';
const baseurl ='https://api.soundcloud.com/users/185676792/favorites';


export function playList(){
    const url=`${baseurl}?client_id=${CLIENT_ID}&limit=60&linked_partitioning=1`;
    const request =axios.get(url);
    return{
        type:FETCH_PLAYLIST,
        payload:request
    }
}
