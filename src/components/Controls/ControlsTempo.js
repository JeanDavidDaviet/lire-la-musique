import React from 'react';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputLabel from '@material-ui/core/InputLabel';
import { useTranslation } from 'react-i18next';

const ControlsTempo = ({ tempo, onChange }) => {
  const { t } = useTranslation();
  return (
    <div className="control">
      <InputLabel shrink htmlFor="control-tempo">{t('Tempo')}</InputLabel><br />
      <NativeSelect value={tempo} onChange={onChange}>
        <option value={20}>20</option>
        <option value={40}>40</option>
        <option value={60}>60</option>
        <option value={80}>80</option>
        <option value={100}>100</option>
        <option value={120}>120</option>
      </NativeSelect>
    </div>
  )
}

export default ControlsTempo;