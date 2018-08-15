import React, { Component } from 'react';
import config from '../../config.js';
import scales from '../../scales.js';
import signatures from '../../signatures.js';
import Controls from '../Controls/Controls';
import ControlsScale from '../Controls/ControlsScale';
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
          <select value={this.state.tempo} onChange={(event) => {this.setState({tempo: parseInt(event.target.value, 10)})}}>
            <option value={60}>60</option>
            <option value={80}>80</option>
            <option value={100}>100</option>
            <option value={120}>120</option>
          </select>
          <label><input checked={this.state.running} type="checkbox" value={this.state.running} onChange={() => {this.setState({running: !this.state.running})}}/>Running</label>
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