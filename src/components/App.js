import React, {Component} from 'react';
import Playlist from './Playlist';
import Player from './Player';
import Header from './Header'
import LoadingComponent from './LoadingComponent';
import TabComponent from './TabComponent';
import {MuiThemeProvider, createMuiTheme} from 'material-ui/styles';
import createPalette from 'material-ui/styles/palette';
import purple from 'material-ui/colors/purple';
import green from 'material-ui/colors/green';
import red from 'material-ui/colors/red';
import Button from 'material-ui/Button';

const theme = createMuiTheme({
  palette: createPalette({
    primary: purple, // Purple and green play nicely together
    accent: {
      ...green,
      A400: '#00e677'
    },
    error: red
  })
});
export default class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div>
          <Header/>
          <TabComponent/>
          <Playlist/>
          <LoadingComponent/>
        </div>
      </MuiThemeProvider>
    )
  }
}
// <Player/>