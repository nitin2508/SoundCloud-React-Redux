import {IMAGE_DEFAULT_SIZE, IMAGE_XLARGE_SIZE} from '../../constant/constant.js'


export function songCardImageUrl(trackData){
    if(trackData.artwork_url){
    let url = trackData.artwork_url;
    return url.replace(IMAGE_DEFAULT_SIZE,IMAGE_XLARGE_SIZE);
    }
}

export function formatSeconds(time){
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds}`;
}

export function convertMilliSecondToSecond(time){
    return Math.floor(time/1000)
}
