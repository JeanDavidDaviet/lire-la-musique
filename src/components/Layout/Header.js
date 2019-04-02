import React from 'react';
import './Layout.css';
import AppBar from '@material-ui/core/AppBar';
import Chip from '@material-ui/core/Chip';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import config from '../../config.js';
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n';
import { useMedia } from '../../useMedia';
import FullScreen from '../Controls/FullScreen';

const Header = () => {
  const isSmallHeight = useMedia([`(max-height: ${config.isSmallHeight}px)`],[true],false);
  const { t } = useTranslation();
  return (
    <AppBar position="static">
      <Toolbar variant={isSmallHeight ? 'dense' : 'regular'}>
        <Typography variant="title" color="inherit">
          <Link to="/" className="logo">{t('Read the music')}</Link>
        </Typography>
        <FullScreen />
        <Link to={`${i18n.language}/changelog`} className="changelog">
          <Chip color="secondary" label={"Version " + config.version} className="changelog__chip"/>
        </Link>
      </Toolbar>
    </AppBar>
  )
}

export default Header;