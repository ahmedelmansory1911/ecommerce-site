import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import en from "./locals/en/translation.json";
import ar from "./locals/ar/translation.json";


const resources = {
    ar: {
      translation: ar
    },
    en: {
      translation: en
    },
   
  };
  

  i18n
.use(initReactI18next)
.use(LanguageDetector) 
.init({
  resources,
  fallbackLng: 'en',
  detection:{
    order: ['cookie', 'localStorage','sessionStorage'],
    caches: ['cookie','localStorage'],
  },
  debug: true,
 

});

export default i18n;