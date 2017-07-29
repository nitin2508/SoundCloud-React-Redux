import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {playList, loadPlaylistOnScroll} from '../actions/index';
import SongCard from './SongCard.js';
import Grid from 'material-ui/Grid';
import Player from './Player';

class Playlist extends Component {
    constructor(props) {
        super(props)
        this.onScroll = this.onScroll.bind(this);
        this.flag = true;
    }
    componentDidMount() {
        //this.props.playList();
        this.onScroll('Mounter')
        window.addEventListener('scroll', this.onScroll)
    }

    onScroll(event) {
        if ((window.innerHeight + window.scrollY > document.body.offsetHeight - 300) && !this.props.isFetching) {
            if (this.props.nextUrl) {
                this.flag = false;
                this.props.loadPlaylistOnScroll(this.props.nextUrl);
            }
        }
    }

    playlist() {
        if (this.props.playlist) {
            return this.props.playlist.map((song, index) => {
                    if (song && song.artwork_url) {
                        return <Grid item key={index}><SongCard index={index} key={index} song={song}/>
                        </Grid>
                    }
                });
        } else {
            return (
                <span></span>
            );
        }
    }

    render() {
        return (
            <div id="playlist">
                <Grid container justify="space-around">
                    {this.playlist()}
                </Grid>
                {this.props.currentSong
                    ? <Player/>
                    : <div></div>}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {playlist: state.player.selectedPlaylists,
       currentSong: state.player.currentSong,
       nextUrl: state.player.nextUrl,
       isFetching: state.isFetching};
}

function mapDispatchToprops(dispatch) {
    return bindActionCreators({
        playList,
        loadPlaylistOnScroll
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToprops)(Playlist);
