import React, {Component} from 'react';
import '../style/style.css';
import {songCardImageUrl} from '../utilFunction/utilFunction.js'
import Icon from 'material-ui/Icon';
import IconButton from 'material-ui/IconButton';
import {playSong} from '../actions/playerAction.js';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import MaterialIcon from 'react-google-material-icons'

class SongCard extends Component {

    constructor(props) {
        super(props);
    }

    CardExampleWithAvatar(song) {
        return (
            <div>
                <img src={songCardImageUrl(song)}/>
                <div className="card-body">
                    <div className="card-text">
                        <p className="card-gener">{song.genre
                                ? song.genre
                                : song.user.username}</p>
                        <p className="card-title">{song.title}</p>
                    </div>
                    <div className="card-button">
                        <i
                            onClick={() => this.props.playSong(song)}
                            className="material-icons md-light card-button-icon">play_arrow</i>
                    </div>
                </div>
            </div>
        )
    }
    render() {
        const song = this.props.song;
        return (
            <div className="ClassCard">{this.CardExampleWithAvatar(song)}</div>
        );
    }
}

function mapDispatchToprops(dispatch) {
    return bindActionCreators({
        playSong
    }, dispatch);
}

export default connect(null, mapDispatchToprops)(SongCard);
