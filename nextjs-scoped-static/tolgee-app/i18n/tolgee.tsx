import { getMessages } from "./getMessages";
import {
  useTranslate as useTolgeeTranslate,
  T as TolgeeT,
} from "@tolgee/react";
import { ReactNode } from "react";

// Extracts strict dot-notation keys from the JSON structure
type Leaves<T> = T extends object
  ? {
      [K in Extract<keyof T, string>]: T[K] extends object
        ? `${K}.${Leaves<T[K]>}`
        : K;
    }[Extract<keyof T, string>]
  : never;

export type TranslationKey = Leaves<ReturnType<typeof getMessages>>;

// Typed Hook
export function useTranslate() {
  const { t, ...rest } = useTolgeeTranslate();

  return {
    ...rest,
    // Enforce the TranslationKey type on the first argument
    t: (
      key: TranslationKey,
      defaultValue?: string,
      parameters?: Record<string, any>,
    ) => t(key, defaultValue, parameters),
  };
}

// Typed Component
type TProps = Omit<React.ComponentProps<typeof TolgeeT>, "keyName"> & {
  keyName: TranslationKey;
  children?: ReactNode;
};

export function T(props: TProps) {
  return <TolgeeT {...props} />;
}
