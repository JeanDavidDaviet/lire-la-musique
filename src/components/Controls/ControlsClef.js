import React from 'react';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputLabel from '@material-ui/core/InputLabel';
import { useTranslation } from 'react-i18next';

const ControlsClef = ( { clef, onChange } ) => {
  const { t } = useTranslation();
  return (
    <div className="control">
      <InputLabel shrink htmlFor="control-clef">{t('Clef')}</InputLabel><br />
      <NativeSelect value={clef} onChange={onChange}>
        <option value={false}>Bass</option>
        <option value={true}>Treble</option>
      </NativeSelect>
    </div>
  )
}

export default ControlsClef;