import jp from "./language/jp.json";
import en from "./language/en.json";
import ko from "./language/ko.json";

export type dictionariesType = typeof dictionaries;
export type Locale = keyof dictionariesType;

export type transitionType = {
  readonly locale: string;
  readonly label: string;
  readonly messages: Partial<typeof i18n.defaultLocale>;
};

// dictionaries에 언어를 추가하면 OK

export const dictionaries = {
  en: { locale: "en", label: "English", messages: en },
  jp: { locale: "jp", label: "日本語", messages: jp },
  ko: { locale: "ko", label: "한국어", messages: ko },
};

export const i18n = {
  defaultLocale: "ko",
  locales: Object.keys(dictionaries) as Array<Locale>,
} as const;
