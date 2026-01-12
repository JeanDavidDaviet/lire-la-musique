import React from 'react';
import NativeSelect from '@mui/material/NativeSelect';
import InputLabel from '@mui/material/InputLabel';
import { useTranslation } from 'react-i18next';

const ControlsClef = ({ clef, onChange }) => {
  const { t } = useTranslation();
  return (
    <div className="control">
      <InputLabel htmlFor="control-clef">{t('Clef')}</InputLabel>
      <NativeSelect value={clef} onChange={onChange}>
        <option value={false}>{t('Bass')}</option>
        <option value={true}>{t('Treble')}</option>
      </NativeSelect>
    </div>
  );
};

export default ControlsClef;
