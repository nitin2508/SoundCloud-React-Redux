import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {playList,loadPlaylistOnScroll} from '../actions/index';
import SongCard from './SongCard.js';
import Grid from 'material-ui/Grid';
import Player from './Player';

class Playlist extends Component {
    constructor(props){
        super(props)
        this.onScroll = this.onScroll.bind(this);
        this.flag = true;
    }
    componentDidMount() {
        this.props.playList();
        this.onScroll('Mounter')
        window.addEventListener('scroll',this.onScroll)
    }

    onScroll(event) {
        //console.log(event);
        console.log(this.props);
        if((window.innerHeight+window.scrollY>document.body.offsetHeight-300) && !this.props.isFetching){

            console.log(this.props);
            if(this.props.nextUrl){
                this.flag = false;
                this.props.loadPlaylistOnScroll(this.props.nextUrl);
            }
        }
    }

    playlist() {
        console.log(this.props);
        if (this.props.playlist) {
        return this.props.playlist.map((song, index) => {
            if(song && song.artwork_url){
            return<Grid item key={index}><SongCard index={index} key={index} song={song} /> </Grid>
        }
        });
    } else {
        return (<span></span>);
        }
    }

    render() {
        return (<div id="playlist">
            <Grid container justify="space-around" >
                {this.playlist()}
            </Grid>
                {this.props.currentSongIndex}
                {this.props.currentSongIndex!=null?<Player/>:<div>nitin</div>}
            </div>
               );
     }
}
// {this.props.currentSong?<Player/>:<div>nitin</div>}

function mapStateToProps(state) {
    console.log(state);
    return {
        playlist:state.player.selectedPlaylists,
        currentSongIndex:state.player.currentSongIndex,
        nextUrl:state.player.nextUrl,
        isFetching:state.isFetching
    };
}

function mapDispatchToprops(dispatch) {
  return bindActionCreators({playList,loadPlaylistOnScroll}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToprops)(Playlist);
