import React from 'react';
import NativeSelect from '@material-ui/core/NativeSelect';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

const ControlsClef = ( { clef, onChange } ) => {
  clef = clef ? 1 : 0;
  return (
    <div className="control">
      <InputLabel shrink htmlFor="clef-native-label-placeholder">Clef</InputLabel><br />
      <NativeSelect value={clef} onChange={onChange}>
        <option value={0}>Bass</option>
        <option value={1}>Treble</option>
      </NativeSelect>
    </div>
  )
}

export default ControlsClef;