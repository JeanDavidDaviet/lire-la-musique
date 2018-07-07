import React, { Component } from 'react';
import './Stave.css';
import Line from './Line';
import Note from './Note';

class Stave extends Component {
  constructor(props){
    super(props);

    let marginTop = 10;
    let width = props.width;

    this.lines = [];
    for(let i = 0; i < 5; i++){
      this.lines.push(
        <Line
          key   = { i }
          x     = { 0 }
          y     = { i * marginTop }
          width = { width }
        />
      );
    }

    this.notes = [];
    for(let i = 0; i < 1; i++){
      this.notes.push(
        <Note key={i}/>
      );
    }
  }

  render() {
    let decalage = {
      transform: `translate3d( ${ this.props.index * 200 }px, 0, 0)`
    };
    return (
      <g className="stave" style={decalage}>
        { this.lines }
        { this.notes }
      </g>
    );
  }
}

Stave.defaultProps = {
  width: 200,
  marginTop: 10
}

export default Stave;