import "server-only";
import type { Locale } from "./i18n-config";
import { i18n } from "./i18n-config";

// We enumerate all dictionaries here for better linting and typescript support
// We also get the default import for cleaner types
type testType = {
  [x: string]: Function;
};

const dictionaries: testType = {
  en: () => import("./language/en.json").then((module) => module.default),
  de: () => import("./language/de.json").then((module) => module.default),
  cs: () => import("./language/cs.json").then((module) => module.default),
};

export const getDictionary = async (locale: Locale) =>
  dictionaries[i18n.locales.includes(locale) ? locale : i18n.defaultLocale]();
