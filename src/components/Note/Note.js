import React from 'react';
import './Note.css';

// REMEMBER : for the "y" property
// less than 0 are higher on the score
// greater than 0 are higher on the score
//
const higherNote = 15;
const lowerNote = 50;

const Note = ( { x, y, staveHeight, marginTop, index, sounds } ) => {
  window.notes.push(y);
  let bars = [];

  // prevent first note to overlap the chord name
  if(!index && y < marginTop){
    y = getRandomTenth(staveHeight, lowerNote);
  }

  // sets the bars if the note are out of the score's height
  if(y < 0){
    for(let i = 0; i < Math.abs(Math.ceil(y / marginTop)); i++){
      bars.push(
        <path fill="none" stroke="black" d={`M-4 ${i*marginTop} L 20 ${i*marginTop}`} key={i}></path>
      );
    }
  }else if(y > staveHeight){
    for(let i = 0; i < Math.floor((y - staveHeight) / marginTop); i++){
      bars.push(
        <path fill="none" stroke="black" d={`M-4 ${i * -marginTop} L 20 ${i * -marginTop}`} key={i}></path>
      );
    }
  }

  return (
    <g className="note" style={{transform: `translate3d(${x}px,${y}px,0)`}}>
      <g className="note__stem">
        <path fill="none" stroke="black" d="M 0 0 L 0 35"></path>
      </g>
      <g className="note__head">
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
    get: () => getRandomTenth(higherNote, lowerNote)
  },

});

function getRandomTenth(min, max) {
  // return a number between getRandomInt(higherNote, lowerNote) rounded to the nearest ten
  return Math.ceil(getRandomInt(min, max) / 10) * 10;
}

function getRandomInt(min, max) {
  // const rand = Math.floor(window.perlin().getVal(Date.now()) * (max - min + 1)) + min;
  // console.log(rand);
  // return rand;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default Note;