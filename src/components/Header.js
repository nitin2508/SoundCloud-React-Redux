import React ,{Component} from 'react';
import {searchSong} from '../actions/index.js';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';


class Header extends Component{
    constructor(props){
        super(props);
        this.onInputChange = this.onInputChange.bind(this);
        this.onSearch = this.onSearch.bind(this);
        this.state={searchTerm:''}
    }

    onInputChange(event){
        this.setState({searchTerm:event.target.value})
    }

    onSearch(event){

        console.log("Call search")
        console.log(searchSong);;
        searchSong(this.state.searchTerm);
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

function mapDispatchToprops(dispatch) {
  return bindActionCreators({searchSong}, dispatch);
}

export default connect(null,mapDispatchToprops)(Header);
