import { Tolgee, FormatSimple } from "@tolgee/web";
import { messageModules, type Messages } from "./getMessages";
import {
  useTranslate as useTolgeeTranslate,
  T as TolgeeT,
} from "@tolgee/react";

export const tolgee = Tolgee()
  // Formatter for passing variables into translations
  .use(FormatSimple())
  .init({
    language: "en",
    staticData: messageModules,
  });

// Extracts strict dot-notation keys from the JSON structure
type Leaves<T> = T extends object
  ? {
      [K in Extract<keyof T, string>]: T[K] extends object
        ? `${K}.${Leaves<T[K]>}`
        : K;
    }[Extract<keyof T, string>]
  : never;

export type TranslationKey = Leaves<Messages>;

// Typed Hook
export function useTranslate() {
  const { t, ...rest } = useTolgeeTranslate();

  return {
    ...rest,
    // Enforce the TranslationKey type on the first argument
    t: (key: TranslationKey) => t(key),
  };
}

// Typed Component
type TProps = Omit<React.ComponentProps<typeof TolgeeT>, "keyName"> & {
  keyName: TranslationKey;
};

export function T(props: TProps) {
  return <TolgeeT {...props} />;
}
