import React, { Component } from 'react';
import config from '../../config.js';
import scales from '../../scales.js';
import signatures from '../../signatures.js';
import Controls from '../Controls/Controls';
import ControlsScale from '../Controls/ControlsScale';
import ControlsTempo from '../Controls/ControlsTempo';
import ControlsRunning from '../Controls/ControlsRunning';
import Mesure from '../Mesure/Mesure';

export class App extends Component {
  constructor(){
    super();
    this.state = {
      chosenScale: "C",
      running: true,
      tempo: 60
    };
    this.stopRunning = this.stopRunning.bind(this);
  }
  stopRunning(event){
    if(event.keyCode === 32){
      this.setState({running: !this.state.running});
    }
  }
  componentDidMount(){
    document.addEventListener("keydown", this.stopRunning, false);
  }
  componentWillUnmount(){
    document.removeEventListener("keydown", this.stopRunning, false);
  }
  render() {
    return (
      <React.Fragment>
        <Controls>
          <ControlsScale chosenScale={this.state.chosenScale} scales={scales} onChange={(event) => {this.setState({chosenScale:  event.target.value})}}></ControlsScale>
          <ControlsTempo tempo={this.state.tempo} onChange={(event) => {this.setState({tempo: parseInt(event.target.value, 10)})}}></ControlsTempo>
          <ControlsRunning running={this.state.running} onChange={() => {this.setState({running: !this.state.running})}}></ControlsRunning>
        </Controls>
        <Mesure
        config={config}
        chosenScale={this.state.chosenScale}
        scale={scales[this.state.chosenScale]}
        signature={signatures[this.state.chosenScale]}
        running={this.state.running}
        tempo={this.state.tempo}/>
      </React.Fragment>
    );
  }
}

export default App;