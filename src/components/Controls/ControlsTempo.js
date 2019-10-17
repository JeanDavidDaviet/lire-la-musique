import React from 'react';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputLabel from '@material-ui/core/InputLabel';
import { useTranslation } from 'react-i18next';
import config from '../../config';

const ControlsTempo = ({ tempo, onChange }) => {
  const { t } = useTranslation();
  const tempos = [];
  for(let i = config.tempoGapUnit; i <= config.tempoMaxBPM; i += config.tempoGapUnit){
    tempos.push(i);
  }
  return (
    <div className="control">
      <InputLabel htmlFor="control-tempo">{t('Tempo')}</InputLabel>
      <NativeSelect value={tempo} onChange={onChange}>
        {}
        {tempos.map(t => <option key={t} value={t}>{t}</option>)}
      </NativeSelect>
    </div>
  )
}

export default ControlsTempo;
