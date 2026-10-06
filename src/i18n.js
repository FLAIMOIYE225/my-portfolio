import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from './locales/en.json';
import translationAR from './locales/ar.json';
import translationFR from './locales/fr.json';
import translationES from './locales/es.json';

const resources = {
  en: { translation: translationEN },
  ar: { translation: translationAR },
  fr: { translation: translationFR },
  es: { translation: translationES }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en', // Langue par défaut si la détection échoue
    interpolation: {
      escapeValue: false // React gère déjà la protection contre XSS
    }
  });

export default i18n;