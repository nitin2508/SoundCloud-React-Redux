import React, {Component} from 'react';
import {connect} from 'react-redux';
import {CLIENT_ID} from '../constant/constant.js'
import ReactDOM from 'react-dom';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import Grid from 'material-ui/Grid';
import {formatSeconds , convertMilliSecondToSecond} from '../utilFunction/track/track.js'
const Handle = Slider.Handle;


class Player extends Component{
    constructor(props){
        super(props);
        this.handlePause = this.handlePause.bind(this);
        this.handlePlay = this.handlePlay.bind(this);
        //this.handlePlay = this.handlePlay.bind(this);
        this.handleTimeUpdate = this.handleTimeUpdate.bind(this);
        this.handleSeeking = this.handleSeeking.bind(this);
        //const audioElement =''
        this.state={
            isPlaying:true,
            muted:false,
            shuffle:false,
            repeat:false,
            currentTime:0,
            duration:0,
            volume:0
        }

    }
    componentDidMount(){
        //const audioElement = document.getElementById('audio')
        this.audio.addEventListener('ended', this.handleEnded);
        this.audio.addEventListener('loadedmetadata', this.handleLoadedMetadata);
        //  audioElement.addEventListener('pause', this.handlePause, false);
        //  audioElement.addEventListener('play', this.handlePlay, false);
        this.audio.addEventListener('timeupdate', this.handleTimeUpdate);
        this.audio.addEventListener('volumechange', this.handleVolumeChange);
        this.audio.play();
        const handle = () => {
          return (
              <Handle value={this.state.currentTime}/>
          );
        };
    }

    handleTimeUpdate(){

        this.setState({currentTime:Math.floor(this.audio.currentTime)});
        console.log(this.state.currentTime);
        const abc = (this.state.currentTime/convertMilliSecondToSecond(this.props.currentSong.duration))*100;
        console.log(abc);
        console.log(document.getElementsByClassName('rc-slider-track'));
    document.getElementsByClassName('rc-slider-track')[0].style.width=abc+'%';
    document.getElementsByClassName('rc-slider-handle')[0].style.left=abc+'%';

        //console.log(("Start: " + this.audio.start(0)+ " End: " + this.audio.end(0)));
    }

    // handleTimeUpdate(){
    //     console.log("===========================================");
    //     //  console.log(event);
    //     alert("Downloading video");
    // }

    componentDidUpdate(){
        const audioElement = ReactDOM.findDOMNode(this.refs.audio);
        //audioElement.play()
    }

    handlePause(event){
        this.setState({isPlaying:false})
        this.audio.pause();
    }

    handlePlay(event){
        const audioElement = ReactDOM.findDOMNode(this.refs.audio);
        this.setState({isPlaying:true});
        this.audio.play();
    }

    handleFirstSlider(event){
            const audioElement = document.getElementById('audio');
            audioElement.volume = event/100;
    }

    handleSeeking(event){
        console.log(event);
        this.audio.currentTime = event;
    }


    render(){
        if(this.props.currentSong){
            return(
                <div className="player">
                    <audio id="audio" ref={audio=>this.audio = audio}>
                    <source src={`${this.props.currentSong.stream_url}?client_id=${CLIENT_ID}`} type="audio/ogg"/>
                    </audio>
                    <Grid container gutter={24}>
                        <Grid item md={3}>
                                {this.state.isPlaying?<i onClick={()=>this.handlePause()} className="material-icons md-light">pause</i>: <i onClick={()=>this.handlePlay()} className="material-icons md-light">play_arrow</i>}
                        </Grid>
                        <Grid item md = {4}>
                        <p>{convertMilliSecondToSecond(this.props.currentSong.duration)} {this.state.currentTime} </p>
                            <Slider tipTransitionName="Seeker" min={0}  max={convertMilliSecondToSecond(this.props.currentSong.duration)} onAfterChange={this.handleSeeking} handle={this.handle} />
                        </Grid>
                        <Grid item md={3}>
                            <Slider tipTransitionName="volume" tipFormatter={10} onChange={this.handleFirstSlider} defaultValue={this.state.volume} />
                        </Grid>

                     </Grid>
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
