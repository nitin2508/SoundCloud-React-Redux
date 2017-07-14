import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {playList} from '../actions/index';
import SongCard from './SongCard.js';
import Grid from 'material-ui/Grid';

class Playlist extends Component {
    componentDidMount() {
        this.props.playList();
    }

    playlist() {
        if (this.props.playlist) {
        return this.props.playlist.map((song, index) => {
            if(song && song.artwork_url){
            return<Grid item key={index}><SongCard key={index} song={song} /> </Grid>
        }
        });
    } else {
        return (<span></span>);
        }
    }

    render() {
        return (
            <Grid container justify="space-around" >
                {this.playlist()}
            </Grid>
               );
     }
}

function mapStateToProps(state) {
    return {
        playlist:state.playlist
    };
}

function mapDispatchToprops(dispatch) {
  return bindActionCreators({playList}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToprops)(Playlist);
