import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const ressources = {
  en: {
    translations: {
      "Read the music": "Read the music",
      "Scale": "Scale",
      "Welcome to React": "Welcome to React and react-i18next"
    }
  },
  fr: {
    translations: {
      "Scale": "Gamme",
      "Read the music": "Lire la musique"
    }
  }
};

i18n.use(LanguageDetector).init({
  // we init with resources
  resources: ressources,
  fallbackLng: "en",
  debug: false,

  // have a common namespace used around the full app
  ns: ["translations"],
  defaultNS: "translations",

  keySeparator: false, // we use content as keys

  interpolation: {
    escapeValue: false, // not needed for react!!
    formatSeparator: ","
  },

  react: {
    wait: true
  }
});

export default i18n;
