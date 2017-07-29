import React, {Component} from 'react';
import {searchSong} from '../actions/index.js';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import LoadingComponent from './LoadingComponent';
import * as logo from '../assets/wave.png';
import Grid from 'material-ui/Grid';

class Header extends Component {
    constructor(props) {
        super(props);
        this.onInputChange = this
            .onInputChange
            .bind(this);
        this.render = this
            .render
            .bind(this);
        this.onSearch = this
            .onSearch
            .bind(this);
        this.state = {
            searchTerm: ''
        }
    }

    onInputChange(event) {
        this.setState({searchTerm: event.target.value})
    }

    onSearch(event) {
        this
            .props
            .searchSong(this.state.searchTerm);
        event.preventDefault();
    }

    render() {
        return (
            <Grid
                container
                align="center"
                direction="row"
                justify="space-between"
                className="header">
                <Grid item>
                    <div className="margin-t-6">
                        <Grid container align="center" direction="row">
                            <img className="logo" src={logo}/>
                            <p>SOUND CLOUD</p>
                        </Grid>
                    </div>
                </Grid>
                <Grid item>
                    <form onSubmit={this.onSearch}>
                        <input onChange={this.onInputChange}/>
                    </form>
                </Grid>
            </Grid>
        )
    }
}
// {this.props.isFetching?<div>Nitinnnnnnnnnnnnn</div>:<LoadingComponent/>}
function mapDispatchToprops(dispatch) {
    return bindActionCreators({
        searchSong
    }, dispatch);
}

function mapStateToProps(state) {
    return {isFetching: state.inFetching}
}

export default connect(mapStateToProps, mapDispatchToprops)(Header);
