import { combineReducers } from 'redux';
import PlayerReducer from './playerReducer';
import {IS_FETCHING,ON_SCROLL} from '../actions/index';
// import {FETCH_PLAYLIST,PLAY_SONG} from '../actions/index';
// import {PLAY_NEXT} from '../actions/playerAction.js'

const rootReducer = combineReducers({
    // playlist:PlaylistReducer,
    // currentSong:PlaySongReducer,
    // playNext:PlayNextReducer,
    player:PlayerReducer,
    isFetching:fetching
    // books:BooksReducer,
    // activeBook:ActiveBook
});

function fetching(state = '',action){
    console.log('Fetching',action);
    switch(action.type){
        case IS_FETCHING:
        return true;
        default: return false;
    }

}
//
// function PlaylistReducer(state = [], action) {
//     switch (action.type) {
//         case FETCH_PLAYLIST:
//         return action.payload.data.collection;
//         default:return state;
//     }
// }
//
// function PlaySongReducer (state =null,action){
//     switch (action.type){
//         case PLAY_SONG:
//         return action.payload;
//         default:return state;
//     }
// }
//
// function PlayNextReducer(state=null,action){
//     console.log(state);
//     console.log(action);
//     console.log(PLAY_NEXT);
//     switch(action.type){
//         case PLAY_NEXT:
//         console.log(state);
//         return state;
//     }
//     return state;
// }

export default rootReducer;
