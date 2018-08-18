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
import Chip from '@material-ui/core/Chip';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

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
  render() {
    return (
      <React.Fragment>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="title" color="inherit">
              Lire la musique
            </Typography>
            <Chip color="secondary" label={"Version" + config.version} style={{marginLeft: 'auto'}}/>
          </Toolbar>
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