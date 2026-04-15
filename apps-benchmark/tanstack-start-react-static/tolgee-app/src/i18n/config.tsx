import {
  useTranslate as useTolgeeTranslate,
  T as TolgeeT,
} from "@tolgee/react";
import type en from "./locales/en.json";

export const defaultLocale = "en";
export const locales = [
  "en",
  "fr",
  "es",
  "de",
  "it",
  "pt",
  "zh",
  "ja",
  "ko",
  "ru",
] as const;
export type Locale = (typeof locales)[number];

export const getLocaleName = (locale: string): string => {
  try {
    const displayNames = new Intl.DisplayNames([locale], { type: "language" });
    const name = displayNames.of(locale);
    return name ? name.charAt(0).toUpperCase() + name.slice(1) : locale;
  } catch (e) {
    return locale.toUpperCase();
  }
};

// Extracts strict dot-notation keys from the JSON structure
type Leaves<T> = T extends object
  ? {
      [K in Extract<keyof T, string>]: T[K] extends object
        ? `${K}.${Leaves<T[K]>}`
        : K;
    }[Extract<keyof T, string>]
  : never;

export type TranslationKey = Leaves<typeof en>;

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
