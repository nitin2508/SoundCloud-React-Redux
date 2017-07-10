import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {playList} from '../actions/index'

class Playlist extends Component{
    componentDidMount(){
        this.props.playList();
    }
    render(){
        return <div>Playlist</div>
    }
}

function mapStateToProps(state){
    console.log(state);
    return{
        playlist:state.playlist
    }
}

function mapDispatchToprops(dispatch){
    return bindActionCreators({playList},dispatch);
}

export default connect(mapStateToProps,mapDispatchToprops)(Playlist);
