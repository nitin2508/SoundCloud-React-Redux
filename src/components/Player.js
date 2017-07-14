import React, {Component} from 'react';
import {connect} from 'react-redux';
import {CLIENT_ID} from '../constant/constant.js'
import ReactDOM from 'react-dom';


class Player extends Component{
    componentDidUpdate(){
        // console.log("a");
        // console.log(ReactDOM);
        // //console.log(this.refs.audio.getDOMNode());
        // console.log(findDOMNode());
        // console.log("b");
        const audioElement = document.getElementById('audio');
        console.log(audioElement);
        audioElement.load();
        audioElement.play();
    }
    render(){
        console.log(this.props);
        if(this.props.currentSong){
            return(
                <div>
                    <audio id="audio" ref="audio" controls>
                    <source src={`${this.props.currentSong.stream_url}?client_id=${CLIENT_ID}`} type="audio/ogg"/>
                    </audio>
                </div>
                   )
        }else{
            return <div></div>
        }

    }
}

function mapStateToProps(state){
    console.log(state);
    return{
        currentSong:state.currentSong
    }
}

export default connect (mapStateToProps,null)(Player);
