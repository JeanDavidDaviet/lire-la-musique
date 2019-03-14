import React from 'react';
import Switch from '@material-ui/core/Switch';
import InputLabel from '@material-ui/core/InputLabel';
import { useTranslation } from 'react-i18next';

const ControlsRunning = ({ running, onChange }) => {
  const { t } = useTranslation();
  return (
    <div className="control">
      <InputLabel shrink htmlFor="control-running">{t('Running')}</InputLabel><br />
      <Switch color="primary" checked={running} onChange={onChange}/>
    </div>
  )
}

export default ControlsRunning;