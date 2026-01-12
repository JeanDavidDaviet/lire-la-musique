import React from 'react';
import { useTranslation } from 'react-i18next';

const Notation = ({ notation, onClick }) => {
  const { t } = useTranslation();
  return (
    <div style={{ float: 'right' }}>
      <span style={style} onClick={onClick}>
        {t('Notation-' + +notation)}
      </span>
    </div>
  );
};

const style = {
  fontSize: 12,
  color: '#3c4fbc',
  cursor: 'pointer',
};
export default Notation;
