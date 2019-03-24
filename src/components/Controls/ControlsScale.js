import React from 'react';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputLabel from '@material-ui/core/InputLabel';
import { useTranslation } from 'react-i18next';
import { realScale } from '../../scales';

const ControlsScale = ({ chosenScale, onChange }) => {
  const { t } = useTranslation();
  return (
    <div className="control">
      <InputLabel shrink htmlFor="control-scale">{t('Scale')}</InputLabel><br />
      <NativeSelect value={chosenScale} onChange={onChange}>
        {Object.keys(realScale.ids)
          .filter(e => e !== 'Es' && e !== 'Fb' && e !== 'Bs' && e !== 'Cb')
          .map(c => <option key={c} value={c}>{realScale.displayName[realScale.ids[c]]}</option>)}
      </NativeSelect>
    </div>
  )
}

export default ControlsScale;