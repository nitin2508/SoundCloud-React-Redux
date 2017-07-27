import React,{Component} from 'react';
import * as img from '../assets/Flickr.gif';
import {connect} from 'react-redux';

class LoadingComponent extends Component{
    giveHtml(){
        if(this.props.isFetching){
            return (<div className="loadingDiv">
                    <img className="loadingImg" src={img}/>
                </div>)
        }
        return (<div></div>)
    }
    render(){
        return (this.giveHtml())
    }
}

function mapStateToProps(state){
    return{
        isFetching:state.isFetching
    }
}

export default connect(mapStateToProps) (LoadingComponent);
