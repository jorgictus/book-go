import intl from 'react-intl-universal';

import enUS from './en/en-US.json';

const locales = {
  'en-US': enUS
};

const currentLocale = 'en-US';

export default function getLocaleConfig() {
  intl.init({
    currentLocale,
    locales
  });
}
