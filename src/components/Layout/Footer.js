import React from 'react';
import Flags from './Flags';
import Credits from './Credits';
import SettingsDialog from './SettingsDialog';
import { useMedia } from '../../useMedia';

const Footer = () => {
  const isSmallHeight = useMedia(['(max-height: 400px)'],[true],false);
  return (
    <footer className={`footer ${isSmallHeight ? 'footer--small' : ''}`}>
      <Flags />
      <Credits />
      <SettingsDialog />
    </footer>
  )
}

export default Footer;