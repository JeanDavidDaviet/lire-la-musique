import React from 'react';
import Switch from '@material-ui/core/Switch';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

const ControlsRunning = ( { running, onChange } ) => (
  <div className="control">
    <InputLabel shrink htmlFor="control-running">Running</InputLabel><br />
    <Switch color="primary" checked={running} onChange={onChange} input={<Input name="running" id="control-running" />}/>
  </div>
)

export default ControlsRunning;