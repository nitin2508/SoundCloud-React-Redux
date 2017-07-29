import React from 'react';
export const CHANGE_PLAYING_SONG = 'CHANGE_PLAYING_SONG';
export const TOGGLE_IS_PLAYING = 'TOGGLE_IS_PLAYING';

export function playSong(song){
    return{
        type:CHANGE_PLAYING_SONG,
        currentSong:song
    };
}
