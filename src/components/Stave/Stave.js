import React from 'react';
import config from '../../config';

const Stave = ({ index, children }) => {
  const staveWidth = config.staveWidth;

  let decalage = {
    transform: `translate3d( ${ index * staveWidth }px, 0, 0)`
  };

  return (
    <g className="stave" style={decalage}>
      { children }
      <path fill="none" stroke="black" d={`M ${staveWidth} 0 L ${staveWidth} 40`}></path>
    </g>
  );
}

export default Stave