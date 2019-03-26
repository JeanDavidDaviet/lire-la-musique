import React from 'react';
import './Controls.css';
import { useMedia } from '../../useMedia';
import config from '../../config';

const Controls = ({ children }) => {
  const isSmallHeight = useMedia([`(max-height: ${config.isSmallHeight}px)`],[true],false);
  return (
    <div className={`controls ${isSmallHeight ? 'controls--small' : ''}`}>
      {children}
    </div>
  )
}

export default Controls;