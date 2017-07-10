import { combineReducers } from 'redux';
import {FETCH_PLAYLIST} from '../actions/index';

const rootReducer = combineReducers({
    playlist:PlaylistReducer
    // books:BooksReducer,
    // activeBook:ActiveBook
});

function PlaylistReducer(state ={},action){
    switch(action.type){
        case FETCH_PLAYLIST:
        return action.payload.data.collection;
        default:return state;
    }
}

export default rootReducer;
