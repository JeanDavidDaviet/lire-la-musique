import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import translations from './translations';


i18n.on('languageChanged', function(lng) {
  if (lng.indexOf('-') > 1) {
    // change 'fr-FR' to 'fr'
    i18n.changeLanguage(lng.substr(0, lng.indexOf('-')));
  }
})

i18n.use(LanguageDetector).init({
  // we init with resources
  resources: translations,
  fallbackLng: "en",
  debug: false,

  // have a common namespace used around the full app
  ns: ["translations"],
  defaultNS: "translations",

  load: 'languageOnly',

  keySeparator: false, // we use content as keys

  interpolation: {
    escapeValue: false, // not needed for react!!
    formatSeparator: ","
  }
});

export default i18n;
