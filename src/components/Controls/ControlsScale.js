import React from 'react';
import NativeSelect from '@material-ui/core/NativeSelect';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import { Trans } from "react-i18next";

const ControlsScale = ( { chosenScale, scales, onChange } ) => (
  <div className="control">
    <InputLabel shrink htmlFor="control-scale">Scale</InputLabel><br />
    <NativeSelect value={chosenScale} onChange={onChange} input={<Input name="scale" id="control-scale" />}>
      {Object.keys(scales).sort().map((value, index) => {
        return <option key={index} value={value}>{scales[value].M}</option>
      })}
    </NativeSelect>
  </div>
)

export default ControlsScale;