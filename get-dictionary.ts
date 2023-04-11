import type { Locale } from "./i18n-config";
import { i18n, dictionaries, transitionType } from "./i18n-config";

// export const getDictionary = (locale: Locale) =>
//   dictionaries[i18n.locales.includes(locale) ? locale : i18n.defaultLocale];

export const getDictionary = (locale: Locale) => {
  return dictionaries[
    dictionaries.hasOwnProperty(locale) ? locale : i18n.defaultLocale
  ];
};
