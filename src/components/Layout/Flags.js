import React from 'react';
import i18n from "../../i18n";

const Flags = () => (
    <div className="flags">
        <img style={style} alt="Français" src="/assets/svg/fr.svg" onClick={() => i18n.changeLanguage('fr')} />
        <img style={style} alt="English" src="/assets/svg/gb.svg" onClick={() => i18n.changeLanguage('en')} />
    </div>
);

const style = {
    maxWidth: 24,
    marginRight: 10,
    cursor: 'pointer'
};

export default Flags;
