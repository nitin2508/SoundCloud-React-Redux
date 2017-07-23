import React from 'react';
import {FETCH_PLAYLIST,PLAY_SONG,ON_SEARCH} from '../actions/index';
import {CHANGE_PLAYING_SONG,TOGGLE_IS_PLAYING} from '../actions/playerAction.js'
const initalState ={
     currentSongIndex:null,
     isPlaying:false,
     selectedPlaylists:[],
     listOfPlayList:{},
     currentTime:0
 };

 export default function PlayerReducer(state = initalState,action){
     console.log('ACTION CALLED');
     switch (action.type) {
         case FETCH_PLAYLIST:
         console.log("FETCHED");
         console.log(action);
         let key = action.meta.key;
         let playlist = {};
         playlist[key] = action.payload.data;
         return Object.assign({},state,{
             selectedPlaylists:action.payload.data.collection,
             listOfPlayList:{...state.listOfPlayList,playlist}
         });
         case CHANGE_PLAYING_SONG:
         return Object.assign({},state,{
             currentSongIndex:action.currentSongIndex
         });
         case TOGGLE_IS_PLAYING:
         return Object.assign({},state,{
             isPlaying:!state.isPlaying
         });
         case ON_SEARCH:
        //  let key = action.meta.key;
        //  let playlist = {};
        //  playlist[key] = action.payload.data;
         return Object.assign({},state,{
             selectedPlaylists:action.payload.data.collection,
            // listOfPlayList:{...state.listOfPlayList,playlist}
         })
         default: return state;
     }
 };

 //PlayerReducer;
