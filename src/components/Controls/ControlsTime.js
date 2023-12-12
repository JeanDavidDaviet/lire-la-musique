import React from 'react';
import NativeSelect from '@mui/material/NativeSelect';
import InputLabel from '@mui/material/InputLabel';
import { useTranslation } from 'react-i18next';

const ControlsTime = ({ time, onChange }) => {
  const { t } = useTranslation();
  return (
    <div className="control">
      <InputLabel htmlFor="control-time">{t('Time Signature')}</InputLabel>
      <NativeSelect value={time} onChange={onChange}>
        <optgroup label="2 beats">
          <option>2/2</option>
          <option>2/4</option>
        </optgroup>
        <optgroup label="3 beats">
          <option>3/4</option>
          <option>3/6</option>
          <option>3/8</option>
        </optgroup>
        <optgroup label="4 beats">
          <option>4/4</option>
          <option>4/8</option>
          <option>4/12</option>
        </optgroup>
      </NativeSelect>
    </div>
  )
}

export default ControlsTime;
