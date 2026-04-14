import { Tolgee, DevTools, FormatSimple } from "@tolgee/web";
import { getMessages } from "./getMessages";
import { locales } from "./config";
import { useTranslate as useTolgeeTranslate, T as TolgeeT } from "@tolgee/react";

// Generate root objects for every locale (e.g., { en: {...messages}, fr: {...messages}, de: {...messages} })
export const rootLocales = locales.reduce(
  (acc, lang) => {
    acc[lang] = getMessages(lang);
    return acc;
  },
  {} as Record<string, any>,
);

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
    // Provide local translation files for production fallback (namespace-split)
    staticData: rootLocales,
  });



// Extracts strict dot-notation keys from the JSON structure
type Leaves<T> = T extends object
  ? {
      [K in Extract<keyof T, string>]: T[K] extends object
        ? `${K}.${Leaves<T[K]>}`
        : K;
    }[Extract<keyof T, string>]
  : never;

export type TranslationKey = Leaves<typeof getMessages('en')>

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
