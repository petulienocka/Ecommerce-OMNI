import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import { TRANSLATION_EN } from '../locales/en';
import { TRANSLATION_DA } from '../locales/da';

// i18n.on('languageChanged', function (lng) {
//     if (lng === i18n.options.fallbackLng[0]) {
//         if (
//             window.location.pathname.includes('/' + i18n.options.fallbackLng[0])
//         ) {
//             const newUrl = window.location.pathname.replace(
//                 '/' + i18n.options.fallbackLng[0],
//                 ''
//             );
//             window.location.replace(newUrl);
//         }
//     }
// });

i18n.use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: TRANSLATION_EN,
            },
            da: {
                translation: TRANSLATION_DA,
            },
        },
        whitelist: ['en', 'da'],
        fallbackLng: ['en'],
        detection: {
            caches: ['cookie'],
            lookupFromPathIndex: 0,
            checkWhitelist: true,
            order: ['path'],
        },
        interpolation: {
            escapeValue: false,
            formatSeparator: '.',
        },
    });

export { i18n };
