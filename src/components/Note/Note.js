import React, { Component } from 'react';
import './Note.css';

class Note extends Component {
  // constructor(props){
  //   super(props);
  // }

  render(){
    return(
      <g className="note" style={{transform: `translate3d(${this.props.x}px,${this.props.y}px,0)`}}>
        <g className="note__stem">
          <path fill="none" stroke="black" d="M 0 0 L 0 35"></path>
        </g>
        <g className="note__head">
          <ellipse cx="7" cy="2" rx="8" ry="5"></ellipse>
        </g>
      </g>
    );
  }
}

Note.defaultProps = Object.create({}, {
  y: {
    enumerable: true,
    get: () => getRandomInt(-30, 70)
  },

});

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default Note;