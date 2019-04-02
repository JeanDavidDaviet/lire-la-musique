import React from 'react';
import './Note.css';
import config from '../../config';

const staveHeight = config.staveHeight;
const marginTop = config.yIntervalBetweenNotes * 2;

// REMEMBER : for the "y" property
// less than 0 are higher on the score
// greater than 0 are higher on the score

const higherNote = -20;
const lowerNote = 70;

const Note = ( { x, y, index } ) => {
  // prevent first note to overlap the chord name
  if(!index && y < marginTop){
    y = getRandomFifth(0, staveHeight);
  }

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


Note.defaultProps = Object.create({}, {
  y: {
    enumerable: true,
    get: () => getRandomFifth(higherNote, lowerNote)
  },

});

function getRandomFifth(min, max) {
  // return a number between getRandomInt(higherNote, lowerNote) rounded to the nearest fifth
  return Math.ceil(getRandomInt(min, max) / 5) * 5;
}

function getRandomInt(min, max) {
  // const rand = Math.floor(window.perlin().getVal(Date.now()) * (max - min + 1)) + min;
  // return rand;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default Note;