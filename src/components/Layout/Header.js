import React from 'react';
import './Layout.css';
import AppBar from '@mui/material/AppBar';
import Chip from '@mui/material/Chip';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import config from '../../config.js';
import { useTranslation } from "react-i18next";
import i18n from '../../i18n';
import { useMedia } from '../../useMedia';
import FullScreen from '../Controls/FullScreen';
import MenuDrawer from './MenuDrawer';

const Header = () => {
  const isSmallHeight = useMedia([`(max-height: ${config.isSmallHeight}px)`],[true],false);
  const { t } = useTranslation();
  return (
    <AppBar position="static" color='primary'>
      <Toolbar variant={isSmallHeight ? 'dense' : 'regular'}>
        <MenuDrawer />
        <Typography variant="h6" color="inherit" sx={{ flexGrow: 1, ml: 1 }}>
          <Link to="/" className="logo">{t('Read the music')}</Link>
        </Typography>
        <FullScreen />
        <Link to={`/${i18n.language}/changelog`} className="changelog">
          <Chip color="secondary" label={"Version " + config.version} className="changelog__chip"/>
        </Link>
      </Toolbar>
    </AppBar>
  )
}

export default Header;
