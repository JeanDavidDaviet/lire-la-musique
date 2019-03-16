import React, { useState } from 'react';
import i18n from "../../i18n";
import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';
import { useTranslation } from 'react-i18next';

const Flags = () => {
    const { t } = useTranslation();
    const [opened, setOpen] = useState(false);
    return (
        <div className="flags">
            <img style={style} alt="Français" src="/assets/svg/fr.svg" onClick={() => i18n.changeLanguage('fr')} />
            <img style={style} alt="English" src="/assets/svg/gb.svg" onClick={() => i18n.changeLanguage('en')} />
            <img style={style} alt="Other language" src="/assets/svg/language.svg" onClick={() => setOpen(true)} />
            <Dialog open={opened} onClose={() => setOpen(!opened)} aria-labelledby="simple-dialog-title">
                <Typography component="h2" variant="title" style={{ padding: 8 * 3 }}>{t('Contribute in your language!')}</Typography>
                <div style={{padding: '0 24px 24px 24px'}}>
                    <p>{t('You can contribute by adding your own translation in your language!')}</p>
                    <p>{t('Two ways of doing this:')}</p>
                    <ul>
                        <li>{t('Send me an email at')} <a href="mailto:"></a></li>
                        <li>{t('Contribute directly using')} <a href="https://github.com/JeanDavidDaviet/piano">Github</a></li>
                    </ul>
                </div>
            </Dialog>
        </div>
    )
};

const style = {
    maxWidth: 24,
    marginRight: 10,
    cursor: 'pointer'
};

export default Flags;
