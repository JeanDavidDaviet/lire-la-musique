import React from 'react';
import NativeSelect from '@material-ui/core/NativeSelect';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

const ControlsClef = ( { clef, onChange } ) => {
  return (
    <div className="control">
      <InputLabel shrink htmlFor="control-clef">Clef</InputLabel><br />
      <NativeSelect value={clef} onChange={onChange} input={<Input name="clef" id="control-clef" />}>
        <option value={false}>Bass</option>
        <option value={true}>Treble</option>
      </NativeSelect>
    </div>
  )
}

export default ControlsClef;