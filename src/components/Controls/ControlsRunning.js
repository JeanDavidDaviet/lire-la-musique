import React from 'react';
import Switch from '@material-ui/core/Switch';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

const ControlsRunning = ( { running, onChange } ) => (
  <div className="control">
    <InputLabel shrink htmlFor="running-native-label-placeholder">Running</InputLabel><br />
    <Switch color="primary" checked={running} onChange={onChange}  input={<Input name="running" id="running-native-label-placeholder" />}/>
  </div>
)

export default ControlsRunning;