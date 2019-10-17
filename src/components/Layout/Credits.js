import React, { useState } from 'react';
import './Layout.css';
import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';
import { useTranslation } from 'react-i18next';

const Credits = () => {
  const { t } = useTranslation();
  const [opened, setOpen] = useState(false);
  return (
    <div style={{float: 'right'}}>
        <span style={style} onClick={() => setOpen(true)}>{t('Credits')}</span>
        <Dialog open={opened} onClose={() => setOpen(!opened)} aria-labelledby="simple-dialog-title">
            <Typography component="h2" variant="h6" style={{ padding: 8 * 3 }}>{t('Credits')}</Typography>
            <ul style={{margin:0, padding: 24, listStyle: 'none'}}>
                <li style={{marginBottom: 10}}>{t('Site creator')}: <a href="https://jeandaviddaviet.fr" target="_blank" rel="noopener noreferrer">Jean-David Daviet</a></li>
                <li style={{marginBottom: 10}}>{t('Flags SVG Icons')}: <a href="http://flag-icon-css.lip.is" target="_blank" rel="noopener noreferrer">flag-icon-css</a></li>
                <li style={{marginBottom: 0}}>{t('UI Design')}: <a href="https://material-ui.com/" target="_blank" rel="noopener noreferrer">Material Design for React</a></li>
            </ul>
        </Dialog>
    </div>
  )
}

const style = {
    fontSize: 12,
    color: '#3c4fbc',
    cursor: 'pointer',
}

export default Credits;
