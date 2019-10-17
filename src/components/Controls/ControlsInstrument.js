import React from 'react';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputLabel from '@material-ui/core/InputLabel';
import { useTranslation } from 'react-i18next';

const ControlsInstrument = ({ instrument, onChange }) => {
  const { t } = useTranslation();
  return (
    <div className="control">
      <InputLabel htmlFor="control-tempo">{t('Instrument')}</InputLabel>
      <NativeSelect value={instrument} onChange={onChange}>
        <option value={0}>{t('Piano')}</option>
        <option value={1}>{t('Computer')}</option>
        {/* <option value={1}>Metronome</option> */}
      </NativeSelect>
    </div>
  )
}

export default ControlsInstrument;
