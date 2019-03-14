import React from 'react';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputLabel from '@material-ui/core/InputLabel';

const ControlsClef = ( { clef, onChange } ) => {
  return (
    <div className="control">
      <InputLabel shrink htmlFor="control-clef">Clef</InputLabel><br />
      <NativeSelect value={clef} onChange={onChange}>
        <option value={false}>Bass</option>
        <option value={true}>Treble</option>
      </NativeSelect>
    </div>
  )
}

export default ControlsClef;