import React from 'react';

const Line = ( { x, y, width } ) => (
  <path
    strokeWidth="1"
    fill="none"
    stroke="#999999"
    strokeDasharray="none"
    fontFamily="Arial"
    fontSize="10pt"
    fontWeight="normal"
    fontStyle="normal"

    d={`M${x} ${y}L ${x + width} ${y}`}></path>
)

export default Line;