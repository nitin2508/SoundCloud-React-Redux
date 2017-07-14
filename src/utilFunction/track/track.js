import {IMAGE_DEFAULT_SIZE, IMAGE_XLARGE_SIZE} from '../../constant/constant.js'


export function songCardImageUrl(trackData){
    if(trackData.artwork_url){
    let url = trackData.artwork_url;
    return url.replace(IMAGE_DEFAULT_SIZE,IMAGE_XLARGE_SIZE);
    }
}
