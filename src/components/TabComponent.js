import React, {Component} from 'react';
import Tabs, {Tab} from 'material-ui/Tabs';
import AppBar from 'material-ui/AppBar';
import {TAGS} from '../constant/constant.js'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {playList, loadPlaylistOnScroll} from '../actions/index';

class TabComponent extends Component {
  constructor(props){
    super(props);
    this.state = {index:0};
    this.onScroll = this.onScroll.bind(this);
  }

  onScroll(event) {
    console.log(window.scrollY);
    if(window.scrollY>75){
      document.getElementById('tabComponent').style.position='fixed';
      document.getElementById('tabComponent').style.top='0';
    }else{
      document.getElementById('tabComponent').style.position='static';
    }
  }

  handleChange = (event, index) => {
    let selectedTag = TAGS[index].key;
      this.props.playList(selectedTag);
      this.setState({index:index})
  }

  componentDidMount(){
    window.addEventListener('scroll', this.onScroll)
    this.setState({index:0})
    this.props.playList('bollywood');
    //this.handleChange();
  }

  giveHtml(){
    return TAGS.map((tag)=>{
      return  <Tab key={tag.displayName} className="tag" label={tag.displayName}/>
    })
  }
  render(){
    console.log(this.property);
    return (
      <div id="tabComponent" className="tabParent highZIndex">
        <AppBar position="static">
          <Tabs
            index={this.state.index}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            scrollable
            scrollButtons="auto">
            {this.giveHtml()}
          </Tabs>
        </AppBar>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({playList}, dispatch);
}

export default connect(null,mapDispatchToProps)(TabComponent);
