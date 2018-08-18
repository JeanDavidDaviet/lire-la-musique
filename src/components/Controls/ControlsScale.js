import React from 'react';
import NativeSelect from '@material-ui/core/NativeSelect';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

const ControlsScale = ( { chosenScale, scales, onChange } ) => (
  <div className="control">
    <InputLabel shrink htmlFor="scale-native-label-placeholder">Scale</InputLabel><br />
    <NativeSelect value={chosenScale} onChange={onChange} input={<Input name="scale" id="scale-native-label-placeholder" />}>
      {Object.keys(scales).sort().map((value, index) => {
        return <option key={index} value={value}>{scales[value].M}</option>
      })}
    </NativeSelect>
  </div>
)

export default ControlsScale;