import React from 'react';
import { FETCH_PLAYLIST,PLAY_SONG,ON_SEARCH,ON_SCROLL} from '../actions/index';
import {CHANGE_PLAYING_SONG,TOGGLE_IS_PLAYING} from '../actions/playerAction.js';
const initalState = {
  currentSongIndex: null,
  isPlaying: false,
  selectedPlaylists: [],
  listOfPlayList: {},
  currentTime: 0,
  nextUrl: ''
};

export default function PlayerReducer(state = initalState, action) {
    console.log(state);
  switch (action.type) {
    case FETCH_PLAYLIST:
      let key = action.meta.key;
      let playlist = {};
      playlist[key] = action.payload.data;
      return Object.assign({}, state, {
        selectedPlaylists: action.payload.data.collection,
        listOfPlayList: { ...state.listOfPlayList,
          playlist
        },
        nextUrl: action.payload.data.next_href
      });
    case CHANGE_PLAYING_SONG:
      return Object.assign({}, state, {
        currentSongIndex: action.currentSongIndex
      });
    case TOGGLE_IS_PLAYING:
      return Object.assign({}, state, {
        isPlaying: !state.isPlaying
      });
    case ON_SCROLL:
      let array = state.selectedPlaylists.concat(action.payload.data.collection);
      return Object.assign({}, state, {
        selectedPlaylists: array,
        nextUrl: action.payload.data.next_href
      });
    default:
      return state;
  }
};

//PlayerReducer;
