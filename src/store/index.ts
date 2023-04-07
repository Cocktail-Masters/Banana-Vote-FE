import { create, useStore as useZuStandStore, createStore } from "zustand";
import { Locale } from "i18n-config";
import { createContext, useContext } from "react";

type localeStoreType = {
  lng: Locale;
  lngChange: (lng: Locale) => void;
};

const getDefaultInitialLocaleState = () =>
  ({
    lng: "ko",
  } as Pick<localeStoreType, "lng">);

export type StoreType = ReturnType<typeof initializeLocaleStore>;

const zustandContenxt = createContext<StoreType | null>(null);

export const Provider = zustandContenxt.Provider;

export const useStore = <T>(selector: (state: localeStoreType) => T) => {
  const store = useContext(zustandContenxt);

  if (!store) throw new Error("Store is missing the provider!!");

  return useZuStandStore(store, selector);
};

export const initializeLocaleStore = (
  preloadedState: Partial<localeStoreType> = {}
) => {
  return createStore<localeStoreType>((set, get) => ({
    ...getDefaultInitialLocaleState(),
    ...preloadedState,
    lngChange: (locale) => {
      set({
        lng: locale,
      });
    },
  }));
};
