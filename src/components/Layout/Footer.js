import React from 'react';
import Flags from './Flags';
import Credits from './Credits';
import SettingsDialog from './SettingsDialog';
import { useMedia } from '../../useMedia';
import config from '../../config';

const Footer = () => {
  const isSmallHeight = useMedia([`(max-height: ${config.isSmallHeight}px)`],[true],false);
  return (
    <footer className={`footer ${isSmallHeight ? 'footer--small' : ''}`}>
      <Flags />
      <Credits />
      <SettingsDialog />
    </footer>
  )
}

export default Footer;