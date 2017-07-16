import React, {Component} from 'react';
import Playlist from './Playlist';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Player from './Player';

export default class App extends Component {
  render() {
    return ( <MuiThemeProvider><div>
            <Playlist />

            </div></MuiThemeProvider>)
    }
}
// <Player/>
