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
import Mesure from '../Mesure/Mesure';
import sounds from '../Note/sounds/sounds';
import ControlsInstrument from '../Controls/ControlsInstrument.js';
import Button from '@material-ui/core/Button';
import PlayArrow from '@material-ui/icons/PlayArrow';
import Pause from '@material-ui/icons/Pause';
import { useTranslation } from 'react-i18next';
import Footer from '../Layout/Footer.js';
import getAudioContext from '../../webAudio.js';
import { connect } from 'react-redux';
import { setRunning, setVolume, setTempo, setScale, setClef, setTime, setInstrument } from '../../store/actions/global.action.js';
import ControlsVolume from '../Controls/ControlsRunning';
import { useMedia } from '../../useMedia.js';

window.notes = [];


const Home = ({ chord, running, volume, tempo, chosenScale, clef, time, instrument, setRunning, setVolume, setTempo, setScale, setClef, setTime, setInstrument }) =>  {
  const { t } = useTranslation();
  const isSmallHeight = useMedia([`(max-height: ${config.isSmallHeight}px)`],[true],false);
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
        <ControlsClef clef={clef} onChange={() => {setClef()}} /><br/>
        <ControlsTime time={time} onChange={(event) => { setTime(event.target.value)}} /><br/>
        <ControlsScale chosenScale={chosenScale} scales={scales} onChange={(event) => {setScale(event.target.value)}}></ControlsScale><br/>
        <ControlsTempo tempo={tempo} onChange={(event) => { setTempo(parseInt(event.target.value, 10)); }} /><br/>
        <ControlsInstrument instrument={instrument} onChange={(event) => { setInstrument(parseInt(event.target.value, 10)) }} /><br />
        {chord ? null : <ControlsVolume volume={volume} onChange={setVolume} />}
      </Controls>
      <Mesure
        chord={chord}
        config={config}
        chosenScale={chosenScale}
        scale={scales[chosenScale]}
        signature={signatures[chosenScale]}
        running={running}
        volume={volume}
        tempo={tempo}
        sounds={sounds}
        instrument={instrument}
        chord={chord}
        clef={clef}
        time={time}></Mesure>
      <div className={`play ${isSmallHeight ? 'play--small':''}`}>
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
  chord: props.match.params.chord,
  counter: state.configReducer.counter,
  running: state.configReducer.running,
  volume: state.configReducer.volume,
  tempo: state.tempoReducer.tempo,
  chosenScale: state.scaleReducer.chosenScale,
  clef: state.configReducer.clef,
  time: state.configReducer.time,
  instrument: state.configReducer.instrument,
});

const mapDispatchToProps = dispatch => ({
  setRunning: () => dispatch(setRunning()),
  setVolume: () => dispatch(setVolume()),
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
