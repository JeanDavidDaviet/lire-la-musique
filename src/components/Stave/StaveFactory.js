import React, { Component } from 'react';
import Stave from '../../components/Stave/Stave';
import LineFactory from '../../components/Line/LineFactory';
import NoteFactory from '../../components/Note/NoteFactory';
import getAudioContext from '../../webAudio';
import config from '../../config';
import ChordName from './ChordName';
import getChord from '../../getChords';
import NoteChordsFactory from '../Note/NoteChordsFactory';
import sounds from '../Note/sounds/sounds';

let timeoutId = 0;

class StaveFactory extends Component {
  constructor(props){
    super(props);

    this.audios = {};
    (Object.keys(sounds)).forEach((index) => {
      this.audios[index] = new Audio(sounds[index]);
    });

    this.stavesNumber = Math.ceil(config.width / config.staveWidth) + 1;

    this.setTempo(props.tempo);
    this.rAF = null;

    this.staves = [];
    this.canProcess = 0;
    this.canPlay = 0;

    this.state = {
      x: config.clefWidth,
      staveIndex: 0,
      transform: `translate3d(${config.clefWidth}px,${config.staveMarginTop}px,0)`
    }
  }

  componentDidMount(){
    for(let i = 0; i < this.stavesNumber; i++){
      this.pushStave(i);
    }
    this.setState({staveIndex: this.stavesNumber});
    this.update();
  }

  componentWillUnmount(){
    cancelAnimationFrame(this.rAF);
  }

  update = () => {
    this.rAF = requestAnimationFrame(this.update);
    if(this.props.running){
      if(this.state.x < -config.staveWidth - this.canProcess){
        this.canProcess += config.staveWidth;
        this.addStaves();
        this.removeStaves();
      }

      if(this.state.x - config.clefWidth + config.xIntervalBetweenNotes - 30 < this.canPlay){
        this.canPlay -= config.xIntervalBetweenNotes;

        if (this.props.volume === true) {
          if (this.props.instrument === 0) {
            this.audios[window.notes[0]].play();
          }
          if (this.props.instrument === 1) {
            const context = getAudioContext();
            context.oscillator.frequency.value = 1396.91 * (Math.pow(2, (-(window.notes[0] / 5) / 12)));
            context.gain.gain.value = 1;

            timeoutId = setTimeout(() => {
              context.gain.gain.value = 0;
              clearTimeout(timeoutId);
            }, 150);
          }
        }
        window.notes.splice(0, 1);
      }

      this.setState({
        x: this.state.x - this.pixelsPerFrame,
        transform: `translate3d(${this.state.x}px,${config.staveMarginTop}px,0)`
      });
    }
  }

  addStaves = () => {
    this.pushStave(this.state.staveIndex);
    this.setState({staveIndex: this.state.staveIndex + 1});
  }

  removeStaves = () => {
    this.staves.splice(0, 1);
  }

  setTempo(tempo) {
    let tempoMultiplicator = tempo / 60;

    this.pixelsPerBeats = config.xIntervalBetweenNotes * tempoMultiplicator;
    this.pixelsPerFrame = this.pixelsPerBeats / config.framesPerBeat;
  }

  pushStave(index) {
    const rootOrFourthOrFifth = Math.round(Math.random() * 2);
    const minorOrMajor = Math.round(Math.random());
    const { chords, displayName, displayLatin } = getChord(this.props.chosenScale, rootOrFourthOrFifth, minorOrMajor);

    this.staves.push(
      <Stave index={index} key={index}>
        <ChordName inter={displayName} latin={displayLatin} />
        <LineFactory />
        {this.props.isChord ?
          <NoteChordsFactory chords={chords} /> :
          <NoteFactory />}
      </Stave>
    );
  }

  render(){
    this.setTempo(this.props.tempo);
    const { transform } = this.state;
    return (
      <g className="mesure" style={{ transform }}>
        { this.staves }
      </g>
    );
  }
}

export default StaveFactory;