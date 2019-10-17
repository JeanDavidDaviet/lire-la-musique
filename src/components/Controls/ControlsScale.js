import React from 'react';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputLabel from '@material-ui/core/InputLabel';
import { useTranslation } from 'react-i18next';

const ControlsScale = ({ chosenScale, scales, onChange }) => {
  const { t } = useTranslation();
  return (
    <div className="control">
      <InputLabel htmlFor="control-scale">{t('Scale')}</InputLabel>
      <NativeSelect value={chosenScale} onChange={onChange}>
        {Object.keys(scales).sort().map((value, index) => {
          return <option key={index} value={value}>{scales[value].M}</option>
        })}
      </NativeSelect>
    </div>
  )
}

export default ControlsScale;
