import React, { useState } from 'react';
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
import StavesChordsFactory from '../Stave/StaveChordsFactory';
import Signature from '../Signature/Signature';
import sounds from '../Note/sounds/sounds';
import ControlsInstrument from '../Controls/ControlsInstrument.js';
import Button from '@material-ui/core/Button';
import PlayArrow from '@material-ui/icons/PlayArrow';
import Pause from '@material-ui/icons/Pause';
import { useTranslation } from 'react-i18next';
import Footer from '../Layout/Footer.js';
import getAudioContext from '../../webAudio.js';
import { connect } from 'react-redux';
import { setRunning, setTempo, setScale, setClef, setTime, setInstrument } from '../../store/actions/global.action.js';

window.notes = [];

const { t } = useTranslation();

const Home = ({ test, running, tempo, chosenScale, clef, time, instrument, setRunning, setTempo, setScale, setClef, setTime, setInstrument }) =>  {
  const [context, setContext] = useState(false);
  const setContextOnce = () => {
    if (!context) {
      const audioContext = getAudioContext();
      audioContext.resume().then(() => {
        setContext(true);
      });
    }
  }

  return (
    <React.Fragment>
      <Controls>
        <ControlsKeyboard />
        <ControlsClef clef={clef} onChange={() => {setClef()}}></ControlsClef><br/>
        <ControlsTime time={time} onChange={(event) => { setTime(event.target.value)}}></ControlsTime><br/>
        <ControlsScale chosenScale={chosenScale} scales={scales} onChange={(event) => {setScale(event.target.value)}}></ControlsScale><br/>
        <ControlsTempo tempo={tempo} onChange={(event) => { setTempo(parseInt(event.target.value, 10)); }}></ControlsTempo><br/>
        <ControlsInstrument instrument={instrument} onChange={(event) => { setInstrument(parseInt(event.target.value, 10)) }}></ControlsInstrument>
        <ControlsRunning running={running} onChange={() => { setContextOnce(); setRunning(); }}></ControlsRunning><br />
      </Controls>
      {test ? null : <Mesure>
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
      </Mesure>}
      {test ? <Mesure>
        <StavesChordsFactory
          config={config}
          chosenScale={chosenScale}
          scale={scales[chosenScale]}
          signature={signatures[chosenScale]}
          running={running}
          tempo={tempo}
          sounds={sounds}
          instrument={instrument}>
        </StavesChordsFactory>
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
      </Mesure> : null}
      <div style={{ marginTop: 'auto', textAlign: 'center' }}>
        <Button variant="contained" color="primary" size="large" onClick={() => { setContextOnce(); setRunning(); }}>
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

const mapStateToProps = (state, props) => ({
  test: props.test,
  counter: state.configReducer.counter,
  running: state.configReducer.running,
  tempo: state.tempoReducer.tempo,
  chosenScale: state.scaleReducer.chosenScale,
  clef: state.configReducer.clef,
  time: state.configReducer.time,
  instrument: state.configReducer.instrument,
});

const mapDispatchToProps = dispatch => ({
  setRunning: () => dispatch(setRunning()),
  setTempo: (value) => dispatch(setTempo(value)),
  setScale: (value) => dispatch(setScale(value)),
  setClef: () => dispatch(setClef()),
  setTime: (value) => dispatch(setTime(value)),
  setInstrument: (value) => dispatch(setInstrument(value)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
