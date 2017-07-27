import React ,{Component} from 'react';
import {searchSong} from '../actions/index.js';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import LoadingComponent from './LoadingComponent';

class Header extends Component{
    constructor(props){
        super(props);
        this.onInputChange = this.onInputChange.bind(this);
        this.render = this.render.bind(this);
        this.onSearch = this.onSearch.bind(this);
        this.state={searchTerm:''}
    }

    onInputChange(event){
        this.setState({searchTerm:event.target.value})
    }

    onSearch(event){
        this.props.searchSong(this.state.searchTerm);
        event.preventDefault();
    }

    render(){
        return (
            <div>
                <form onSubmit={this.onSearch}>
                    <input onChange={this.onInputChange}/>
                </form>

            </div> )
    }
}
    // {this.props.isFetching?<div>Nitinnnnnnnnnnnnn</div>:<LoadingComponent/>}
function mapDispatchToprops(dispatch) {
  return bindActionCreators({searchSong}, dispatch);
}

function mapStateToProps(state){
    return {
        isFetching:state.inFetching
    }
}

export default connect(mapStateToProps,mapDispatchToprops)(Header);
