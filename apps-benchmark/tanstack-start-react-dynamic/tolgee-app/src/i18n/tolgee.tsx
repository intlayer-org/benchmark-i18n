import { Tolgee, DevTools, FormatSimple } from "@tolgee/web";
import {
  useTranslate as useTolgeeTranslate,
  T as TolgeeT,
} from "@tolgee/react";

export const tolgee = Tolgee()
  // Enables in-context editing (ALT + Click) in development
  .use(DevTools())
  // Formatter for passing variables into translations
  .use(FormatSimple())
  .init({
    language: "en",
    // Required for the DevTools to connect to your project
    apiUrl: import.meta.env.VITE_TOLGEE_API_URL,
    apiKey: import.meta.env.VITE_TOLGEE_API_KEY,
    // Provide local translation files for production fallback (dynamic loading)
    staticData: {
      en: () => import("./locales/en.json"),
      fr: () => import("./locales/fr.json"),
      es: () => import("./locales/es.json"),
      de: () => import("./locales/de.json"),
      it: () => import("./locales/it.json"),
      pt: () => import("./locales/pt.json"),
      zh: () => import("./locales/zh.json"),
      ja: () => import("./locales/ja.json"),
      ko: () => import("./locales/ko.json"),
      ru: () => import("./locales/ru.json"),
    },
  });

// Extracts strict dot-notation keys from the JSON structure
type Leaves<T> = T extends object
  ? {
      [K in Extract<keyof T, string>]: T[K] extends object
        ? `${K}.${Leaves<T[K]>}`
        : K;
    }[Extract<keyof T, string>]
  : never;

// Using type-only import to avoid bundling the whole file for types
import type EN_JSON from "./locales/en.json";
export type TranslationKey = Leaves<typeof EN_JSON>;

// Typed Hook
export function useTranslate() {
  const { t, ...rest } = useTolgeeTranslate();

  return {
    ...rest,
    // Enforce the TranslationKey type on the first argument
    t: (key: TranslationKey, defaultValue?: string) => t(key, defaultValue),
  };
}

// Typed Component
type TProps = Omit<React.ComponentProps<typeof TolgeeT>, "keyName"> & {
  keyName: TranslationKey;
};

export function T(props: TProps) {
  return <TolgeeT {...props} />;
}
