import i18next from "i18next"
import LanguageDetector from "i18next-browser-languagedetector"
import HttpApi from "i18next-http-backend"
import Backend from "i18next-chained-backend"
import { initReactI18next } from "react-i18next"
import ua from "./locales/ua.json"
import en from "./locales/en.json"

i18next
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: "en",
    debug: false,
    fallbackLng: "en",
    resources: {
      ua: { translation: ua },
      en: { translation: en },
    },
    react: {
      useSuspense: false,
    },
    backend: {
      backends: [HttpApi],
      backendOptions: [
        {
          loadPath: "/locales/{{lng}}.json",
        },
      ],
    },
  })

// i18next
//     .use(Backend)
//     .use(LanguageDetector)
//     .use(initReactI18next)
//     .init({
//         lng: "ee",
//         debug: false,
//         fallbackLng: "ee",
//         resources: { ee: { translation: ee }, en: { translation: en } },
//         react: {
//             useSuspense: false,
//         },
//     });

export default i18next
