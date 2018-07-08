import React, { Component } from 'react';
import './Note.css';

class Note extends Component {
  constructor(props){
    super(props);

    this.bars = [];
    this.heightOfStave = 40;
    this.spaceBetweenLines = 10;
  }

  generateBars = () => {
    if(this.props.y < 0){
      for(let i = 0; i < Math.abs(Math.ceil(this.props.y / this.spaceBetweenLines)); i++){
        this.bars.push(
          <path fill="none" stroke="black" d={`M-4 ${i*this.spaceBetweenLines} L 20 ${i*this.spaceBetweenLines}`} key={i}></path>
        );
      }
    }else if(this.props.y > this.heightOfStave){
      for(let i = 0; i < Math.floor((this.props.y - this.heightOfStave) / this.spaceBetweenLines); i++){
        this.bars.push(
          <path fill="none" stroke="black" d={`M-4 ${i * -this.spaceBetweenLines} L 20 ${i * -this.spaceBetweenLines}`} key={i}></path>
        );
      }
    }
  }

  render(){

    this.generateBars();

    return(
      <g className="note" style={{transform: `translate3d(${this.props.x}px,${this.props.y}px,0)`}}>
        <g className="note__stem">
          <path fill="none" stroke="black" d="M 0 0 L 0 35"></path>
        </g>
        <g className="note__head">
          <ellipse cx="8" cy="0" rx="8" ry="5"></ellipse>
        </g>
        <g className="note__bars">
          { this.bars }
        </g>
      </g>
    );
  }
}

Note.defaultProps = Object.create({}, {
  y: {
    enumerable: true,
    // return a number between getRandomInt(-30, 70) rounded to the nearest ten
    get: () => Math.ceil(getRandomInt(-30, 70) / 10) * 10
  },

});

function getRandomInt(min, max) {
  // const rand = Math.floor(window.perlin().getVal(Date.now()) * (max - min + 1)) + min;
  // console.log(rand);
  // return rand;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default Note;