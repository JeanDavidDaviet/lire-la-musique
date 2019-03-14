import React from 'react';
import './Layout.css';
import i18n from "../../i18n";

const Footer = () => (
  <footer className="footer">
    <img className="footer__img" alt="Français" src="/assets/img/FR.png" onClick={() => i18n.changeLanguage('fr')} />
    <img className="footer__img" alt="English" src="/assets/img/GB.png" onClick={() => i18n.changeLanguage('en')} />
  </footer>
)

export default Footer;