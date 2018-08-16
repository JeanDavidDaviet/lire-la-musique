import React, { Component } from 'react';
import config from '../../config.js';
import scales from '../../scales.js';
import signatures from '../../signatures.js';
import Controls from '../Controls/Controls';
import ControlsKeyboard from '../Controls/ControlsKeyboard';
import ControlsScale from '../Controls/ControlsScale';
import ControlsTempo from '../Controls/ControlsTempo';
import ControlsRunning from '../Controls/ControlsRunning';
import Mesure from '../Mesure/Mesure';
import StavesFactory from '../Stave/StaveFactory';
import Signature from '../Signature/Signature';
import AppBar from '@material-ui/core/AppBar';

export class App extends Component {
  constructor(){
    super();
    this.state = {
      chosenScale: "C",
      running: false,
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
        <AppBar style={{paddingLeft: 15}}>
          <p>Lire la musique</p>
        </AppBar>
        <Controls>
          <ControlsKeyboard running={this.stopRunning} />
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
            chosenScale={this.state.chosenScale}
            scale={scales[this.state.chosenScale]}
            signature={signatures[this.state.chosenScale]}
            width={config.xIntervalBetweenNotes}>
          </Signature>
        </Mesure>
      </React.Fragment>
    );
  }
}

export default App;