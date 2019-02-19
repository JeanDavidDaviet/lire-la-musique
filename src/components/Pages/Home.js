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
import sounds from '../Note/sounds/sounds';

window.notes = [];

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
    const {
      chosenScale,
      clef,
      time,
      running,
      tempo
    } = this.state;

    return (
      <React.Fragment>
        <Controls>
          <ControlsKeyboard running={this.stopRunning} />
          <ControlsClef clef={clef} onChange={() => {this.setState({clef: !clef})}}></ControlsClef><br/>
          <ControlsTime time={time} onChange={(event) => {this.setState({time: event.target.value})}}></ControlsTime><br/>
          <ControlsScale chosenScale={chosenScale} scales={scales} onChange={(event) => {this.setState({chosenScale: event.target.value})}}></ControlsScale><br/>
          <ControlsTempo tempo={tempo} onChange={(event) => {this.setState({tempo: parseInt(event.target.value, 10)})}}></ControlsTempo><br/>
          <ControlsRunning running={running} onChange={() => {this.setState({running: !running})}}></ControlsRunning>
        </Controls>
        <Mesure>
          <StavesFactory
            config={config}
            chosenScale={chosenScale}
            scale={scales[chosenScale]}
            signature={signatures[chosenScale]}
            running={running}
            tempo={tempo}
            sounds={sounds}>
          </StavesFactory>
          <Signature
            config={config}
            chosenScale={chosenScale}
            scale={scales[chosenScale]}
            signature={signatures[chosenScale]}
            width={config.xIntervalBetweenNotes}
            clef={clef}
            beats={parseInt(time, 10)}
            quarter={parseInt(time.substr(2), 10)}>
          </Signature>
        </Mesure>
      </React.Fragment>
    );
  }
}

export default Home;