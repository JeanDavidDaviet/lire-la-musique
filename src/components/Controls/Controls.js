import React from 'react';
import './Controls.css';
import { useMedia } from '../../useMedia';

const Controls = ({ children }) => {
  const isSmallHeight = useMedia(['(max-height: 400px)'],[true],false);
  return (
    <div className={`controls ${isSmallHeight ? 'controls--small' : ''}`}>
      {children}
    </div>
  )
}

export default Controls;