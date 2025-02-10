// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Importer les fichiers JSON
import translationEN from '../public/locales/en.json';
import translationFR from '../public/locales/fr.json';

const resources = {
    en: {
        translation: translationEN
    },
    fr: {
        translation: translationFR
    }
};

i18n
    .use(initReactI18next) // Passer i18n à react-i18next
    .init({
        resources,
        lng: "fr", // Langue par défaut
        fallbackLng: "en", // Langue de repli
        interpolation: {
            escapeValue: false // React déjà échappe les valeurs
        }
    });

export default i18n;
