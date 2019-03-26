import React from 'react';

const StaveChords = ({ scale, index, staveWidth, MN_centerNote, children, chord }) => {
  // choose a random chords
  let scalesToArray = Object.values(scale);
  let randomChords = scalesToArray[Math.floor(Math.random() * scalesToArray.length)];
  if(typeof randomChords === 'object'){
    randomChords = Object.values(randomChords)[Math.floor(Math.random() * 2)];
  }

  let decalage = {
    transform: `translate3d( ${ index * staveWidth }px, 0, 0)`
  };
  const chordPosition = {
    transform: `translate3d( ${ (staveWidth / 8) - MN_centerNote}px,-10px,0px)`
  };

  return (
    <g className="stave" style={decalage}>
      <text style={chordPosition}>{chord}</text>
      { children }
      <path fill="none" stroke="black" d={`M ${staveWidth} 0 L ${staveWidth} 40`}></path>
    </g>
  );
}

export default StaveChords;