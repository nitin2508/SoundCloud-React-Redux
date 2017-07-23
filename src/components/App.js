import React, {Component} from 'react';
import Playlist from './Playlist';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Player from './Player';
import Header from './Header'

export default class App extends Component {
  render() {
    return ( <MuiThemeProvider><div>
            <Header/>
            <Playlist />
            </div></MuiThemeProvider>)
    }
}
// <Player/>
