import {create} from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const EN_US = "en";
export const ZH_HANS = "zh_hans";

export type AppConfig = {
  locale: string;
  theme: string;
  switchLang: (name: string) => void;
  switchTheme: (name: string) => void;
};

const appConfigStore = (set: any) => ({
  locale: EN_US,
  theme: "light",
  switchLang: (locale: string) =>
    set({
      locale,
    }),
  switchTheme: (theme: string) =>
    set({
      theme,
    }),
});

export const useAppConfigStore = create<AppConfig>()(
  persist(appConfigStore, {
    name: "app.config",
    storage: createJSONStorage(() => localStorage),
  })
);
