import React, { Component } from 'react';

class ControlsKeyboard extends Component {
  constructor(props){
    super(props);
  }
  componentDidMount(){
    document.addEventListener("keydown", this.props.stopRunning, false);
  }
  componentWillUnmount(){
    document.removeEventListener("keydown", this.props.stopRunning, false);
  }
  render(){return null}
}

export default ControlsKeyboard;
