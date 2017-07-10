import axios from 'axios';
export const FETCH_PLAYLIST = 'FETCH_PLAYLIST'
const baseurl ='https://api.soundcloud.com/users/185676792/favorites';

export function playList(){
    //  var url = 'https://api.soundcloud.com/users/185676792/favorites?client_id=a0f84e7c2d612d845125fb5eebff5b37&limit=60&linked_partitioning=1';

    const url=`${baseurl}?client_id=a0f84e7c2d612d845125fb5eebff5b37&limit=60&linked_partitioning=1`;
    const request =axios.get(url);
    return{
        type:FETCH_PLAYLIST,
        payload:request
    }
}
