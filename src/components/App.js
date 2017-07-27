import React, {Component} from 'react';
import Playlist from './Playlist';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Player from './Player';
import Header from './Header'
import LoadingComponent from './LoadingComponent';

export default class App extends Component {
  render() {
    return ( <MuiThemeProvider><div>
            <Header/>
            <Playlist />
            <LoadingComponent/>
            </div></MuiThemeProvider>)
    }
}
// <Player/>
