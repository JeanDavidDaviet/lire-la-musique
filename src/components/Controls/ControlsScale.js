import React from 'react';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputLabel from '@material-ui/core/InputLabel';

const ControlsScale = ( { chosenScale, scales, onChange } ) => (
  <div className="control">
    <InputLabel shrink htmlFor="control-scale">Scale</InputLabel><br />
    <NativeSelect value={chosenScale} onChange={onChange}>
      {Object.keys(scales).sort().map((value, index) => {
        return <option key={index} value={value}>{scales[value].M}</option>
      })}
    </NativeSelect>
  </div>
)

export default ControlsScale;