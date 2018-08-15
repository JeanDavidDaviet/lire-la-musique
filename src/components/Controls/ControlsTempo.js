import React from 'react';

const ControlsTempo = ( { tempo, onChange } ) => (
  <select value={tempo} onChange={onChange}>
    <option value={60}>60</option>
    <option value={80}>80</option>
    <option value={100}>100</option>
    <option value={120}>120</option>
  </select>
)

export default ControlsTempo;