import React from 'react';
import {FETCH_PLAYLIST,PLAY_SONG} from '../actions/index';
import {CHANGE_PLAYING_SONG,TOGGLE_IS_PLAYING} from '../actions/playerAction.js'
const initalState ={
     currentSongIndex:null,
     isPlaying:false,
     selectedPlaylists:[],
     currentTime:0
 };

 function PlayerReducer(state = initalState,action){
     console.log(action);
     switch (action.type) {
         case FETCH_PLAYLIST:
         return Object.assign({},state,{
             selectedPlaylists:action.payload.data.collection
         });
         case CHANGE_PLAYING_SONG:
         return Object.assign({},state,{
             currentSongIndex:action.currentSongIndex
         });
         case TOGGLE_IS_PLAYING:
         return Object.assign({},state,{
             isPlaying:!state.isPlaying
         });
         default: return state;
     }
 };

 export default PlayerReducer;
