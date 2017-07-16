import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {playList} from '../actions/index';
import SongCard from './SongCard.js';
import Grid from 'material-ui/Grid';
import Player from './Player';

class Playlist extends Component {
    componentDidMount() {
        this.props.playList();
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
        return (<div>
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
        currentSongIndex:state.player.currentSongIndex
    };
}

function mapDispatchToprops(dispatch) {
  return bindActionCreators({playList}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToprops)(Playlist);
