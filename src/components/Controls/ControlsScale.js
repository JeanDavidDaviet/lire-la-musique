import React from 'react';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputLabel from '@material-ui/core/InputLabel';
import { useTranslation } from 'react-i18next';
import { realScale } from '../../scales';

const ControlsScale = ({ chosenScale, onChange, displayLatin }) => {
  const { t } = useTranslation();
  return (
    <div className="control">
      <InputLabel shrink htmlFor="control-scale">{t('Scale')}</InputLabel><br />
      <NativeSelect value={chosenScale} onChange={onChange}>
        {Object.keys(realScale.ids).sort().filter(s => s !== 'Bs' && s !== 'Es' && s !== 'Fb').map((value, index) => {
          const display = displayLatin ? realScale.displayLatin[realScale.ids[value]] : realScale.displayName[realScale.ids[value]];
          return <option key={index} value={value}>{display}</option>
        })}
      </NativeSelect>
    </div>
  )
}

export default ControlsScale;