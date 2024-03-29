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
import Button from '@mui/material/Button';
import PlayArrow from '@mui/icons-material/PlayArrow';
import Pause from '@mui/icons-material/Pause';
import { useTranslation } from 'react-i18next';
import Footer from '../Layout/Footer.js';
import getAudioContext from '../../webAudio.js';
import { connect } from 'react-redux';
import { setRunning, setVolume, setTempo, setScale, setClef, setTime, setInstrument, setNotation } from '../../store/actions/global.action.js';
import ControlsVolume from '../Controls/ControlsRunning';
import { useMedia } from '../../useMedia.js';
import Notation from '../Layout/Notation.js';
import { useParams } from 'react-router-dom';

window.notes = [];


const Home = ({ running, volume, tempo, chosenScale, clef, time, instrument, notation, setRunning, setVolume, setNotation, setTempo, setScale, setClef, setTime, setInstrument }) =>  {
  let { chord } = useParams();

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
        <ControlsScale chosenScale={chosenScale} scales={scales} notation={notation} onChange={(event) => {setScale(event.target.value)}}></ControlsScale><br/>
        <ControlsTempo tempo={tempo} onChange={(event) => { setTempo(parseInt(event.target.value, 10)); }} /><br/>
        <ControlsInstrument instrument={instrument} onChange={(event) => { setInstrument(parseInt(event.target.value, 10)) }} /><br />
        {chord ? null : <ControlsVolume volume={volume} onChange={setVolume} />}
      </Controls>
      <Mesure
        chord={chord}
        config={config}
        chosenScale={chosenScale}
        scale={scales[chosenScale]}
        numberOfAlterations={signatures[chosenScale]}
        running={running}
        volume={volume}
        tempo={tempo}
        sounds={sounds}
        instrument={instrument}
        clef={clef}
        time={time}
        notation={notation}></Mesure>
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
      <Footer>
        <Notation notation={notation} onClick={setNotation} />
      </Footer>

    </React.Fragment>
  );
}

const mapStateToProps = (state, props) => {
  return ({
  // chord: props.match.params.chord,
  running: state.configReducer.running,
  volume: state.configReducer.volume,
  tempo: state.tempoReducer.tempo,
  chosenScale: state.scaleReducer.chosenScale,
  clef: state.configReducer.clef,
  time: state.configReducer.time,
  instrument: state.configReducer.instrument,
  notation: state.configReducer.notation,
})};

const mapDispatchToProps = dispatch => ({
  setRunning: () => dispatch(setRunning()),
  setVolume: () => dispatch(setVolume()),
  setTempo: (value) => dispatch(setTempo(value)),
  setScale: (value) => dispatch(setScale(value)),
  setNotation: () => dispatch(setNotation()),
  setClef: () => dispatch(setClef()),
  setTime: (value) => dispatch(setTime(value)),
  setInstrument: (value) => dispatch(setInstrument(value)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
