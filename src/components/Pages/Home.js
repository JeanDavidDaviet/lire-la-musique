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
import ControlsInstrument from '../Controls/ControlsInstrument.js';
import Button from '@material-ui/core/Button';
import PlayArrow from '@material-ui/icons/PlayArrow';
import Pause from '@material-ui/icons/Pause';
import { useTranslation } from 'react-i18next';
import Footer from '../Layout/Footer.js';
import getAudioContext from '../../webAudio.js';

window.notes = [];

const { t } = useTranslation();

export class Home extends Component {
  constructor(){
    super();
    this.state = {
      chosenScale: "C",
      clef: true,
      time: "4/4",
      running: false,
      tempo: 60,
      instrument: 0,
      context: false
    };
    this.stopRunning = this.stopRunning.bind(this);
  }
  componentDidUpdate(prevProps) {
    if (this.props.running !== prevProps.running) {
      this.setState({ running: !this.state.running });
    }
  }
  stopRunning(event){
    if(event.keyCode === 32){
      this.setState({running: !this.state.running});
    }
  }
  setContext() {
    if (!this.state.context) {
      const context = getAudioContext();
      context.resume().then(() => {
        this.setState({ context: true});
      });
    }
  }
  render() {
    const {
      chosenScale,
      clef,
      time,
      running,
      tempo,
      instrument
    } = this.state;

    return (
      <React.Fragment>
        <Controls>
          <ControlsKeyboard running={this.stopRunning} />
          <ControlsClef clef={clef} onChange={() => {this.setState({clef: !clef})}}></ControlsClef><br/>
          <ControlsTime time={time} onChange={(event) => {this.setState({time: event.target.value})}}></ControlsTime><br/>
          <ControlsScale chosenScale={chosenScale} scales={scales} onChange={(event) => {this.setState({chosenScale: event.target.value})}}></ControlsScale><br/>
          <ControlsTempo tempo={tempo} onChange={(event) => {this.setState({tempo: parseInt(event.target.value, 10)})}}></ControlsTempo><br/>
          <ControlsInstrument instrument={instrument} onChange={(event) => { this.setState({ instrument: parseInt(event.target.value, 10) }) }}></ControlsInstrument>
          <ControlsRunning running={running} onChange={() => {this.setContext(); this.setState({running: !running})}}></ControlsRunning><br />
        </Controls>
        <Mesure>
          <StavesFactory
            config={config}
            chosenScale={chosenScale}
            scale={scales[chosenScale]}
            signature={signatures[chosenScale]}
            running={running}
            tempo={tempo}
            sounds={sounds}
            instrument={instrument}>
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
        <div style={{ marginTop: 'auto', textAlign: 'center' }}>
          <Button variant="contained" color="primary" size="large" onClick={() => { this.setContext(); this.setState({ running: !running }) }}>
            <span style={{ position: 'relative', top: 1, fontWeight: 'normal' }}>
              {running ? t('Pause') : t('Play')}
            </span>
            {running ?
              <Pause style={{ marginLeft: 0, marginRight: -5 }} /> :
              <PlayArrow style={{ marginLeft: 0, marginRight: -5 }} />}
          </Button>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Home;