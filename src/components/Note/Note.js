import React from 'react';
import './Note.css';
import config from '../../config';

const staveHeight = config.staveHeight;
const marginTop = config.yIntervalBetweenNotes * 2;

const Note = ( { x, y, index } ) => {

  window.notes.push(y);
  let bars = [];

  // sets the bars if the note are out of the score's height
  if(y < 0){
    for(let i = 0; i < Math.abs(Math.ceil(y / marginTop)); i++){
      // if the note is on a bar
      if (y % 10 === -5) {
        bars.push(
          <path fill="none" stroke="black" d={`M-4 ${i * marginTop - 2 + (marginTop / 2)} L 20 ${i * marginTop - 2 + (marginTop / 2)}`} key={i}></path>
        );
      } else {
        bars.push(
          <path fill="none" stroke="black" d={`M-4 ${i * marginTop - 2} L 20 ${i * marginTop - 2}`} key={i}></path>
        );
      }
    }
  }else if(y > staveHeight){
    for(let i = 0; i < Math.floor((y - staveHeight) / marginTop); i++){
      // if the note is on a bar
      if (y % 10 === 5) {
        bars.push(
          <path fill="none" stroke="black" d={`M-4 ${i * -marginTop - 2 - (marginTop / 2)} L 20 ${i * -marginTop - 2 - (marginTop / 2)}`} key={i}></path>
        );
      } else {
        bars.push(
          <path fill="none" stroke="black" d={`M-4 ${i * -marginTop - 2} L 20 ${i * -marginTop - 2}`} key={i}></path>
        );
      }
    }
  }

  return (
    <g className="note" style={{transform: `translate3d(${x}px,${y + 2}px,0)`}}>
      <g className="note__stem" style={{transform: `translate3d(${y < 20 ? 0 : 14}px,${y < 20 ? 0 : -38}px,0)`}}>
        <path fill="none" stroke="black" d="M 1 0 L 1 35"></path>
      </g>
      <g className="note__head" style={{transform: `rotate(-15deg)`}}>
        <ellipse cx="8" cy="0" rx="8" ry="5"></ellipse>
      </g>
      <g className="note__bars">
        { bars }
      </g>
    </g>
  )
}

export default Note;
