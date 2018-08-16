import React from 'react';
import './Note.css';

const Note = ( { x, y, staveHeight, marginTop } ) => {
  let bars = [];

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