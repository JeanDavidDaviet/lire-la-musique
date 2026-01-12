import React from 'react';
import config from '../../config';

const StaveChords = ({ scale, index, chord, children }) => {
  const staveWidth = config.staveWidth;
  const MN_centerNote = config.MN_centerNote;
  // choose a random chords
  const scalesToArray = Object.values(scale);
  let randomChords = scalesToArray[Math.floor(Math.random() * scalesToArray.length)];
  if (typeof randomChords === 'object') {
    randomChords = Object.values(randomChords)[Math.floor(Math.random() * 2)];
  }

  const decalage = {
    transform: `translate3d( ${index * staveWidth}px, 0, 0)`,
  };
  const chordPosition = {
    transform: `translate3d( ${staveWidth / 8 - MN_centerNote}px,-10px,0px)`,
  };

  return (
    <g className="stave" style={decalage}>
      <text style={chordPosition}>{chord}</text>
      {children}
      <path fill="none" stroke="black" d={`M ${staveWidth} 0 L ${staveWidth} 40`}></path>
    </g>
  );
};

export default StaveChords;
