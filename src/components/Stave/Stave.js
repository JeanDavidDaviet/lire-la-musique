import React, { Component } from 'react';
import './Stave.css';
import Line from '../../components/Line/Line';
import NoteFactory from '../../components/Note/NoteFactory';

class Stave extends Component {
  constructor(props){
    super(props);

    const marginTop = 10;
    const width = props.width;
    // MagicNumber
    this.MN_centerNote = 6;

    this.chord = "C";

    this.lines = [];
    for(let i = 0; i < 5; i++){
      this.lines.push({
        key   : i,
        x     : 0,
        y     : i * marginTop,
        width : width,
      });
    }

    this.notes = [];
    for(let i = 0; i < 4; i++){
      this.notes.push({
        x  : (i * width / 4) + (width / 8) - this.MN_centerNote,
        key: i
      });
    }
  }

  render() {

    // choose a random chords
    let scalesToArray = Object.values(this.props.scale);
    let randomChords = scalesToArray[Math.floor(Math.random() * scalesToArray.length)];
    if(typeof randomChords === 'object'){
      randomChords = Object.values(randomChords)[Math.floor(Math.random() * 2)];
    }

    let decalage = {
      transform: `translate3d( ${ this.props.index * this.props.width }px, 0, 0)`
    };
    const chordPosition = {
      transform: `translate3d( ${ (this.props.width / 8) - this.MN_centerNote}px,-10px,0px)`
    };
    return (
      <g className="stave" style={decalage}>
        <text style={chordPosition}>{ randomChords }</text>
        {
          this.lines.map((props) => (
            <Line {...props}></Line>
          ))
        }
        {
          this.notes.map((props) => (
            <NoteFactory {...props}/>
          ))
        }
        <path fill="none" stroke="black" d={`M ${this.props.width} 0 L ${this.props.width} 40`}></path>
      </g>
    );
  }
}

Stave.defaultProps = {
  marginTop: 10
}

export default Stave;