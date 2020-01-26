import React, { useState } from 'react';
import i18n from "../../i18n";
import { languages } from '../../translations';
import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';
import { useTranslation } from 'react-i18next';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const Flags = () => {
    const { t } = useTranslation();
    const [opened, setOpen] = useState(false);
    const [snack, setSnack] = useState(false);
    return (
        <div className="flags">
            <img style={style} alt="Français" src="/assets/svg/fr.svg" onClick={() => { setSnack(true); i18n.changeLanguage('fr')}} />
            <img style={style} alt="English" src="/assets/svg/gb.svg" onClick={() => { setSnack(true); i18n.changeLanguage('en')}} />
            <img style={styleLastImg} alt="Other language" src="/assets/svg/language.svg" onClick={() => setOpen(true)} />
            <Dialog open={opened} onClose={() => setOpen(!opened)} aria-labelledby="simple-dialog-title">
                <Typography component="h2" variant="h6" style={{ padding: 8 * 3 }}>{t('Contribute in your language!')}</Typography>
                <div style={{padding: '0 24px 24px 24px'}}>
                    <p>{t('You can contribute by adding your own translation in your language!')}</p>
                    <p>{t('Two ways of doing this:')}</p>
                    <ul>
                        <li>{t('Send me an email at')} <a href="mailto:read.the.music.online@gmail.com">read.the.music.online@gmail.com</a></li>
                        <li>{t('Contribute directly using')} <a href="https://github.com/JeanDavidDaviet/piano" target="_blank" rel="noopener noreferrer">Github</a></li>
                    </ul>
                </div>
            </Dialog>
            <Snackbar
                anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}
                open={snack}
                autoHideDuration={1000}
                onExited={() => setSnack(false)}
                onClose={() => setSnack(false)}
                message={<span id="message-id">{t('Language changed to')} {languages[i18n.language]}</span>}
                action={
                    <IconButton
                      key="close"
                      aria-label="Close"
                      color="inherit"
                      onClick={() => setSnack(false)}>
                      <CloseIcon />
                    </IconButton>
                  }/>
        </div>
    )
};

const style = {
    maxWidth: 24,
    marginRight: 10,
    cursor: 'pointer'
};

const styleLastImg = {...style,
  marginRight: 0
};

export default Flags;
