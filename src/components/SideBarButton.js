import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import injectSheet from 'react-jss';

const styles = {
  sideBarButton:{
    width:'100%',
    height:'100px',
    display: 'flex',
    flexDirection: 'column',
    textDecoration: 'none',
    '& img':{
      height:'50%',
    },
    '& span':{
      color:'#92a6c2',
      height:'37.5%',
      paddingTop:'12.5%',
      textAlign:'center',
    }
  }
}

class SideBarButton extends Component {

  render() {
    return (
      <Link
        className={this.props.classes.sideBarButton}
        to={{ pathname: this.props.pathname }}
      >
        <img src={this.props.src}/>
        {this.props.name?<span>{this.props.name}</span>:<Fragment/>}
      </Link>
    );
  }

}

export default injectSheet(styles)(SideBarButton);
