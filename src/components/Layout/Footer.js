import React from 'react';
import Flags from './Flags';
import Credits from './Credits';
import SettingsDialog from './SettingsDialog';

const Footer = () => (
  <footer className="footer">
    <Flags />
    <Credits />
    <SettingsDialog />
  </footer>
)

export default Footer;