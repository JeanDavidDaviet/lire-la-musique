import React, { Component } from 'react';
import './Stave.css';
import Line from '../../components/Line/Line';
import Note from '../../components/Note/Note';

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
    for(let i = 0; i < 4; i++){
      this.notes.push(
        <Note x={(i * width / 4) + (width / 8) - 6} key={i}/>
      );
    }
  }

  render() {
    let decalage = {
      transform: `translate3d( ${ this.props.index * this.props.width }px, 0, 0)`
    };
    return (
      <g className="stave" style={decalage}>
        { this.props.scale }
        { this.lines }
        { this.notes }
        <path fill="none" stroke="black" d={`M ${this.props.width} 0 L ${this.props.width} 40`}></path>
      </g>
    );
  }
}

Stave.defaultProps = {
  marginTop: 10
}

export default Stave;