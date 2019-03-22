import { Component } from 'react';

import { connect } from 'react-redux';

class ControlsKeyboard extends Component {
  componentDidMount(){
    document.addEventListener("keydown", this.props.setRunning, false);
  }
  componentWillUnmount(){
    document.removeEventListener("keydown", this.props.setRunning, false);
  }
  render(){return null}
}

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    running: state.running
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setRunning: () => dispatch({ type: 'RUNNING' }),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ControlsKeyboard);