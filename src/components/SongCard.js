import React, {Component} from 'react';
import '../style/style.css';
import {songCardImageUrl} from '../utilFunction/track/track.js'
import Icon from 'material-ui/Icon';
import IconButton from 'material-ui/IconButton';
import PlayIcon from 'material-ui-icons/PlayArrow';
import {playSong} from '../actions/index.js';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class SongCard extends Component {

  CardExampleWithAvatar(song){
     // console.log(this.props);
      return(<div>
                <img src={songCardImageUrl(song)}/>
                <div className="card-body">
                    <div className="card-text">
                        <p className="card-gener">{song.genre?song.genre:song.user.username}</p>
                        <p className="card-title">{song.title}</p>
                    </div>
                    <div className="card-button">
                         <IconButton onClick={()=>this.props.playSong(song)} color="#78797a"  aria-label="Add an alarm">
                            <PlayIcon />
                         </IconButton>
                    </div>
               </div>
            </div>)
  }
    render () {
        const song = this.props.song;
        return ( <div className="ClassCard">{this.CardExampleWithAvatar(song)}</div>);
    }
}

function mapDispatchToprops(dispatch){
    return bindActionCreators({playSong}, dispatch);
}

export default connect(null, mapDispatchToprops)(SongCard);
