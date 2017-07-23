import React from 'react';
export const CHANGE_PLAYING_SONG = 'CHANGE_PLAYING_SONG';
export const TOGGLE_IS_PLAYING = 'TOGGLE_IS_PLAYING';

//export const PLAY_NEXT = 'PLAY_NEXT';
//export const PLAY_NEXT = 'PLAY_NEXT';

// export function playNext(){
//     // console.log("ACTION GOT");
//     // console.log(PLAY_NEXT);
//     // return {
//     //     type:PLAY_NEXT
//     // }
// }
export function playSong(songIndex){
    console.log(songIndex);
    return{
        type:CHANGE_PLAYING_SONG,
        currentSongIndex:songIndex
    }
}



// export function changePlayingSong(songIndex){
//     return{
//         type:
//     }
// }
