// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEn from './locales/en.json';
import translationEs from './locales/es.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: translationEn },
      es: { translation: translationEs }
    },
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
