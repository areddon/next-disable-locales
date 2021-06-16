const path = require('path');

const locales = [
  'de',
  'en',
];

module.exports = {
  i18n: {
    defaultLocale: 'de',
    fallbackLng: 'de',
    load: 'all',
    localeDetection: false,
    localePath: path.resolve('./public/static/locales'),
    locales,
    lowerCaseLng: true,
    nonExplicitWhitelist: true,
  },
  locales,
};