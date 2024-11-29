import { initReactI18next } from "react-i18next";
import i18n from "i18next";
import uz from "./lang/uz";
import ru from "./lang/ru";
import eng from "./lang/eng";

const l = localStorage.getItem("language");
const lang = l && JSON.parse(l);

i18n.use(initReactI18next).init({
  resources: {
    uz: {
      translation: uz,
    },
    ru: {
      translation: ru,
    },
    eng: {
      translation: eng,
    },
  },
  lng: lang?.code || "uz",
  fallbackLng: "uz",

  interpolation: {
    escapeValue: false,
  },
});
