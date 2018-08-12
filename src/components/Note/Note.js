import React, { Component } from 'react';
import './Note.css';

const Note = ( { x, y, bars } ) => (
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

export default Note;