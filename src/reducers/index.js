import { combineReducers } from 'redux';
import PlayerReducer from './playerReducer';
import {FETCH_PLAYLIST,IS_FETCHING,ON_SCROLL} from '../actions/index';
const rootReducer = combineReducers({
    player:PlayerReducer,
    isFetching:fetching
});

function fetching(state = true,action){
    switch(action.type){
        case IS_FETCHING:
        return true;
        case FETCH_PLAYLIST:
        return false;
        case ON_SCROLL:
        return false;
        default: return state;
    }

}

export default rootReducer;
