import React from 'react';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputLabel from '@material-ui/core/InputLabel';
import { useTranslation } from 'react-i18next';

const ControlsClef = ( { clef, onChange } ) => {
  const { t } = useTranslation();
  return (
    <div className="control">
      <InputLabel htmlFor="control-clef">{t('Clef')}</InputLabel>
      <NativeSelect value={clef} onChange={onChange}>
        <option value={false}>{t('Bass')}</option>
        <option value={true}>{t('Treble')}</option>
      </NativeSelect>
    </div>
  )
}

export default ControlsClef;
