import React from 'react';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputLabel from '@material-ui/core/InputLabel';
import { useTranslation } from 'react-i18next';
import { getTranslatedScaleFromLetter } from '../../scales';

const ControlsScale = ({ chosenScale, scales, notation, onChange }) => {
  const { t } = useTranslation();
  return (
    <div className="control">
      <InputLabel htmlFor="control-scale">{t('Scale')}</InputLabel>
      <NativeSelect value={chosenScale} onChange={onChange}>
        {Object.keys(scales).sort().map((value, index) => {
          const scaleNotation = getTranslatedScaleFromLetter(scales[value].M, notation);
          return <option key={index} value={value}>{scaleNotation}</option>
        })}
      </NativeSelect>
    </div>
  )
}

export default ControlsScale;
