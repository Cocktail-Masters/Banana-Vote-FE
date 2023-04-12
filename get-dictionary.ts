import type { Locale } from "./i18n-config";
import { i18n, dictionaries } from "./i18n-config";

export const getDictionary = (locale: string) => {
  if (dictionaries.hasOwnProperty(locale)) {
    return dictionaries[locale as Locale];
  } else {
    return dictionaries[i18n.defaultLocale];
  }
};
