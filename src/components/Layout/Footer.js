import React from 'react';
import './Layout.css';
import Flags from './Flags';
import Credits from './Credits';

const Footer = () => (
  <footer className="footer">
    <Flags />
    <Credits />
  </footer>
)

export default Footer;