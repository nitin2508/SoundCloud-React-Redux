import React, {Component} from 'react';
import {connect} from 'react-redux';
import {CLIENT_ID} from '../constant/constant.js'
import ReactDOM from 'react-dom';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import Grid from 'material-ui/Grid';
import {convertMilliSecondToSecond, formatSeconds} from '../utilFunction/utilFunction.js';
import {bindActionCreators} from 'redux';
import {playNext} from '../actions/playerAction'
import {playSong} from '../actions/playerAction.js';

const Handle = Slider.Handle;


class Player extends Component {
    constructor(props) {
        super(props);
        this.handlePause = this.handlePause.bind(this);
        this.handlePlay = this.handlePlay.bind(this);
        //this.handlePlay = this.handlePlay.bind(this);
        this.handleTimeUpdate = this.handleTimeUpdate.bind(this);
        this.handleSeeking = this.handleSeeking.bind(this);
        this.playNextSong = this.playNextSong.bind(this);
        this.playPrevSong = this.playPrevSong.bind(this);
        this.handleEnded = this.handleEnded.bind(this);

        //const audioElement =''playNextSongplayNextSong        this.audio.addEventListener('ended', this.handleEnded);

        this.state = {
            isPlaying: true,
            muted: false,
            shuffle: false,
            repeat: false,
            currentTime: 0,
            duration: 0,
            volume: 50
        }

    }

    componentDidMount() {
        //const audioElement = document.getElementById('audio')
        this.audio.addEventListener('ended', this.handleEnded);
        this.audio.addEventListener('loadedmetadata', this.handleLoadedMetadata);
        //  audioElement.addEventListener('pause', this.handlePause, false);
        //  audioElement.addEventListener('play', this.handlePlay, false);
        this.audio.addEventListener('timeupdate', this.handleTimeUpdate);
        this.audio.addEventListener('volumechange', this.handleVolumeChange);
        this.handleVolume = this.handleVolume.bind(this);
        this.audio.play();
        const handle = () => {
            return (
                <Handle value={this.state.currentTime}/>
            );
        };
    }

    handleTimeUpdate() {
        if (this.audio) {
            this.setState({currentTime: Math.floor(this.audio.currentTime)});
            const abc = (this.state.currentTime / convertMilliSecondToSecond(this.props.currentSong.duration)) * 100;
            document.getElementsByClassName('rc-slider-track')[0].style.width = abc + '%';
            document.getElementsByClassName('rc-slider-handle')[0].style.left = abc + '%';
        }
        //console.log(("Start: " + this.audio.start(0)+ " End: " + this.audio.end(0)));
    }

    // handleTimeUpdate(){
    //     console.log("===========================================");
    //     //  console.log(event);
    //     alert("Downloading video");
    // }

    componentDidUpdate(prevProps) {
        if (prevProps.currentSong.id == this.props.currentSong.id) {
            return;
        }
        this.audio.load();
        this.handleVolume(50);
        this.setState({isPlaying: true});
        this.audio.play();
    }

    handleEnded(event) {
        this.playNextSong();
    }

    handlePause(event) {
        this.setState({isPlaying: false})
        this.audio.pause();
    }

    handlePlay(event) {
        const audioElement = ReactDOM.findDOMNode(this.refs.audio);
        this.setState({isPlaying: true});
        this.audio.play();
    }

    handleVolume(event) {
        const audioElement = document.getElementById('audio');
        this.setState({volume:event})
        audioElement.volume = event / 100;
    }

    handleSeeking(event) {
        this.audio.currentTime = event;
    }

    playNextSong() {
        const nextIndex = this.props.songIndex + 1;
        this.props.playSong(null, nextIndex);
    }

    playPrevSong() {
        if (this.props.songIndex == 0) {
            return;
        }
        const prevIndex = this.props.songIndex - 1;
        this.props.playSong(null, prevIndex);
    }

    getVolumeIcon(){
      if(this.state.volume ===0){
        return 'volume_off';
      }
      else if(this.state.volume<60){
          return 'volume_down';
      }else{
        return 'volume_up';
      }

    }

    render() {
        if (this.props.currentSong) {
            const style = {margin: '6px'}
            return (
                <div className="player highZIndex">
                    <audio id="audio" ref={audio => this.audio = audio}>
                        <source src={`${this.props.currentSong.stream_url}?client_id=${CLIENT_ID}`} type="audio/ogg"/>
                    </audio>

                    <div style={{height:'inherit'}} className="flex layout-row layout-align-space-between-center">

                      <div className="layout-row flex-10 flex-xs-20 flex-sm-20">
                      <i onClick={this.playPrevSong} className="material-icons md-light cursor-pointer">skip_previous</i>{"  "}{" "}
                            {this.state.isPlaying ? <i onClick={this.handlePause}
                                                       className="material-icons md-light cursor-pointer">pause</i> :
                                <i onClick={this.handlePlay} className="material-icons md-light">play_arrow</i>}
                            {" "}{" "}<i onClick={this.playNextSong} className="material-icons md-light cursor-pointer">skip_next</i>
                      </div>

                      <div className="layout-row flex-30 flex-xs-40 flex-sm-40">
                        {this.props.currentSong.title}
                      </div>

                      <div className="layout-row layout-align-start-center hide-sm hide-xs flex-30">
                        <Slider  tipTransitionName="Seeker" min={0}
                                  max={convertMilliSecondToSecond(this.props.currentSong.duration)}
                                      onAfterChange={this.handleSeeking} handle={this.handle}/>
                        <p className="layout-row margin-l-10">{formatSeconds(convertMilliSecondToSecond(this.props.currentSong.duration))} {" "}/{" "}
                                                {formatSeconds(this.state.currentTime)} </p>
                      </div>

                      <div className="layout-row layout-align-start-center flex-15 flex-xs-30 flex-sm-30">
                      <i  className="material-icons md-light margin-l-10">{this.getVolumeIcon()}</i>
                      <Slider tipTransitionName="volume" tipFormatter={10} onChange={this.handleVolume}
                                     defaultValue={this.state.volume}/>
                      </div>
                    </div>
                </div>
            )
        } else {
            return <div></div>
        }

    }
}
// <Grid style={style} container align="center" gutter={24}>
//     <Grid item md={2}>
//         <i onClick={this.playPrevSong} className="material-icons md-light cursor-pointer">skip_previous</i>{"  "}{" "}
//         {this.state.isPlaying ? <i onClick={this.handlePause}
//                                    className="material-icons md-light cursor-pointer">pause</i> :
//             <i onClick={this.handlePlay} className="material-icons md-light">play_arrow</i>}
//         {" "}{" "}<i onClick={this.playNextSong} className="material-icons md-light cursor-pointer">skip_next</i>
//     </Grid>
//     <Grid item md={3}>
//         {this.props.currentSong.title}
//     </Grid>
//     <Grid item md={3}>
//         <Slider tipTransitionName="Seeker" min={0}
//                 max={convertMilliSecondToSecond(this.props.currentSong.duration)}
//                 onAfterChange={this.handleSeeking} handle={this.handle}/>
//     </Grid>
//     <Grid item md={1}>
//         <p>{formatSeconds(convertMilliSecondToSecond(this.props.currentSong.duration))} {" "}/{" "}
//             {formatSeconds(this.state.currentTime)} </p>
//     </Grid>
//     <Grid item md={2}>
//         <Slider tipTransitionName="volume" tipFormatter={10} onChange={this.handleVolume}
//                 defaultValue={this.state.volume}/>
//     </Grid>
//
// </Grid>


function mapStateToProps(state) {
    return {
        currentSong: state.player.currentSong,
        songIndex: state.player.currentSongIndex,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({playSong}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Player);
