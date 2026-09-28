import type EN_JSON from "./locales/en.json";

declare module "@tolgee/core/lib/types" {
  type TranslationsType = typeof EN_JSON;

  // Recursively converts nested JSON structure to dot notation strings (e.g., "faqList.howAreTheBenchmarks")
  type DotNotationEntries<T> = T extends object
    ? {
        [K in keyof T]: `${K & string}${T[K] extends undefined
          ? ""
          : T[K] extends object
            ? `.${DotNotationEntries<T[K]>}`
            : ""}`;
      }[keyof T]
    : "";

  // Enforces strict typing. Using a key not present in en.json will throw a TS error.
  export type TranslationKey = DotNotationEntries<TranslationsType>;
}
