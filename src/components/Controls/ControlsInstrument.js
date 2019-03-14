import React from 'react';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputLabel from '@material-ui/core/InputLabel';

const ControlsInstrument = ( { instrument, onChange } ) => (
  <div className="control">
    <InputLabel shrink htmlFor="control-tempo">Instrument</InputLabel><br />
    <NativeSelect value={instrument} onChange={onChange}>
      <option value={0}>Piano</option>
      <option value={1}>Ordinateur</option>
      {/* <option value={1}>Metronome</option> */}
    </NativeSelect>
  </div>
)

export default ControlsInstrument;