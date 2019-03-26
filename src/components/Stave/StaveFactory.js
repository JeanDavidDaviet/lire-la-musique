import React, { Component } from 'react';
import Stave from '../../components/Stave/Stave';
import LineFactory from '../../components/Line/LineFactory';
import NoteFactory from '../../components/Note/NoteFactory';
import getAudioContext from '../../webAudio';
import config from '../../config';

let timeoutId = 0;

class StaveFactory extends Component {
  constructor(props){
    super(props);

    this.audio = 0;
    this.audios = {};
    (Object.keys(this.props.sounds)).forEach((index) => {
      this.audios[index] = new Audio(this.props.sounds[index]);
    });

    this.stavesNumber = Math.ceil(props.config.width / props.config.staveWidth) + 1;

    this.setTempo(props.tempo);
    this.requestAnimationFrame = null;

    this.staves = [];
    this.canProcess = 0;
    this.canPlay = 0;

    this.state = {
      x: config.clefWidth,
      staveIndex: 0,
      transform: {
        transform:`translate3d(${config.clefWidth}px,${config.staveMarginTop}px,0)`
      }
    }

    this.displayFPS = '';
  }

  setTempo(tempo){
    let tempoMultiplicator = tempo / 60;

    this.pixelsPerBeats = config.xIntervalBetweenNotes * tempoMultiplicator;
    this.pixelsPerFrame = this.pixelsPerBeats / config.framesPerBeat;
  }

  componentDidMount(){
    for(let i = 0; i < this.stavesNumber; i++){
      this.staves.push(
        <Stave index={i} key={i}>
          <LineFactory />
          <NoteFactory />
        </Stave>
      );
    }
    this.setState({staveIndex: this.stavesNumber});

    this.update();
  }

  componentWillUnmount(){
    cancelAnimationFrame(this.requestAnimationFrame);
  }

  update = () => {
    this.requestAnimationFrame = requestAnimationFrame(this.update);
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
        transform: {
          transform: `translate3d(${this.state.x}px,${config.staveMarginTop}px,0)`
        }
      });
    }
  }

  addStaves = () => {
    this.staves.push(
      <Stave index={this.state.staveIndex} key={this.state.staveIndex}>
        <LineFactory />
        <NoteFactory />
      </Stave>
    );

    this.setState({staveIndex: this.state.staveIndex + 1});
  }

  removeStaves = () => {
    this.staves.splice(0, 1);
  }

  render(){
    this.setTempo(this.props.tempo);
    return (
      <g className="mesure" style={this.state.transform}>
        { this.staves }
      </g>
    );
  }
}

export default StaveFactory;