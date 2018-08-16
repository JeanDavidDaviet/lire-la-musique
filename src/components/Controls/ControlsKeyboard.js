import { Component } from 'react';

class ControlsKeyboard extends Component {
  componentDidMount(){
    document.addEventListener("keydown", this.props.stopRunning, false);
  }
  componentWillUnmount(){
    document.removeEventListener("keydown", this.props.stopRunning, false);
  }
  render(){return null}
}

export default ControlsKeyboard;
