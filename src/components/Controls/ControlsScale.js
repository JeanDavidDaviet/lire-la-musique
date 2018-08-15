import React from 'react';

const ControlsScale = ( { chosenScale, scales, onChange } ) => (
  <select value={chosenScale} onChange={onChange}>
    {Object.keys(scales).sort().map((value, index) => {
      return <option key={index} value={value}>{scales[value].M}</option>
    })}
  </select>
)

export default ControlsScale;