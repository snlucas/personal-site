import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';
import translationPT from './locales/pt/location.json';

const resources = {
  pt: {
    translation: translationPT,
  },
  en: {},
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // set the default language to "en"
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
