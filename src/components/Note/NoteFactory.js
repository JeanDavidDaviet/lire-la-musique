import React, { Component } from 'react';
import Note from './Note';

class NoteFactory extends Component {
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
    return <Note x={this.props.x} y={this.props.y} bars={this.bars}></Note>;
  }
}

NoteFactory.defaultProps = Object.create({}, {
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

export default NoteFactory;