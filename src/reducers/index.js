import { combineReducers } from 'redux';
import {FETCH_PLAYLIST,PLAY_SONG} from '../actions/index';

const rootReducer = combineReducers({
    playlist:PlaylistReducer,
    currentSong:PlaySongReducer
    // books:BooksReducer,
    // activeBook:ActiveBook
});

function PlaylistReducer(state = [], action) {
    switch (action.type) {
        case FETCH_PLAYLIST:
        return action.payload.data.collection;
        default:return state;
    }
}

function PlaySongReducer (state =null,action){
    switch (action.type){
        case PLAY_SONG:
        return action.payload;
        default:return state;
    }
}

export default rootReducer;
