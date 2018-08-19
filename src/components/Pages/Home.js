import React, { Component } from 'react';
import config from '../../config.js';
import scales from '../../scales.js';
import signatures from '../../signatures.js';
import Controls from '../Controls/Controls';
import ControlsKeyboard from '../Controls/ControlsKeyboard';
import ControlsClef from '../Controls/ControlsClef';
import ControlsTime from '../Controls/ControlsTime';
import ControlsScale from '../Controls/ControlsScale';
import ControlsTempo from '../Controls/ControlsTempo';
import ControlsRunning from '../Controls/ControlsRunning';
import Mesure from '../Mesure/Mesure';
import StavesFactory from '../Stave/StaveFactory';
import Signature from '../Signature/Signature';

export class Home extends Component {
  constructor(){
    super();
    this.state = {
      chosenScale: "C",
      clef: 1,
      time: "4/4",
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
  render() {
    return (
      <React.Fragment>
        <Controls>
          <ControlsKeyboard running={this.stopRunning} />
          <ControlsClef clef={this.state.clef} onChange={() => {this.setState({clef: !this.state.clef})}}></ControlsClef><br/>
          <ControlsTime time={this.state.time} onChange={(event) => {this.setState({time: event.target.value})}}></ControlsTime><br/>
          <ControlsScale chosenScale={this.state.chosenScale} scales={scales} onChange={(event) => {this.setState({chosenScale: event.target.value})}}></ControlsScale><br/>
          <ControlsTempo tempo={this.state.tempo} onChange={(event) => {this.setState({tempo: parseInt(event.target.value, 10)})}}></ControlsTempo><br/>
          <ControlsRunning running={this.state.running} onChange={() => {this.setState({running: !this.state.running})}}></ControlsRunning>
        </Controls>
        <Mesure>
          <StavesFactory
            config={config}
            chosenScale={this.state.chosenScale}
            scale={scales[this.state.chosenScale]}
            signature={signatures[this.state.chosenScale]}
            running={this.state.running}
            tempo={this.state.tempo}>
          </StavesFactory>
          <Signature
            config={config}
            chosenScale={this.state.chosenScale}
            scale={scales[this.state.chosenScale]}
            signature={signatures[this.state.chosenScale]}
            width={config.xIntervalBetweenNotes}
            clef={this.state.clef}
            beats={parseInt(this.state.time, 10)}
            quarter={parseInt(this.state.time.substr(2), 10)}>
          </Signature>
        </Mesure>
      </React.Fragment>
    );
  }
}

export default Home;