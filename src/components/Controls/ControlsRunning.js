import React from 'react';
import Switch from '@material-ui/core/Switch';
import InputLabel from '@material-ui/core/InputLabel';

const ControlsRunning = ( { running, onChange } ) => (
  <div className="control">
    <InputLabel shrink htmlFor="control-running">Running</InputLabel><br />
    <Switch color="primary" checked={running} onChange={onChange}/>
  </div>
)

export default ControlsRunning;