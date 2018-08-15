import React from 'react';

const ControlsRunning = ( { running, onChange } ) => (
  <label><input checked={running} type="checkbox" value={running} onChange={onChange}/>Running</label>
)

export default ControlsRunning;