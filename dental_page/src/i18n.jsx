import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './locales/en.json';
import hiTranslation from './locales/hi.json';
import mrTranslation from './locales/mr.json';
import i18nextHttpBackend from 'i18next-http-backend';
import React, { useEffect } from 'react';


const getCurrentHost = import.meta.env.MODE === "development" ? "http://localhost:5173" : "LINK TO PROD";




const resources = {
  en: {
    translation: enTranslation
  },
  hi: {
    translation: hiTranslation
  },
  it: {
    translation: mrTranslation
  },
};


i18n
  .use(i18nextHttpBackend)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    lng: 'en', 
    interpolation: {
      escapeValue: false,
    },
    backend:{
        loadPath: `${getCurrentHost}/i18n/{{lng}}.json`,
    },
    ns: "translation",
    defaultNS: "translation"
  });

export default i18n;