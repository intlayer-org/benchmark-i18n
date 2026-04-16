"use client";

import { createI18nClient } from "next-international/client";
import type { ReactNode } from "react";

const client = createI18nClient({
  en: () => import("./en"),
  fr: () => import("./fr"),
  es: () => import("./es"),
  de: () => import("./de"),
  it: () => import("./it"),
  pt: () => import("./pt"),
  zh: () => import("./zh"),
  ja: () => import("./ja"),
  ko: () => import("./ko"),
  ru: () => import("./ru"),
});

/** Flattened JSON locales are `Record<string, string>`; relax typing so `t(key)` works without a second arg. */
type Params = Record<string, string | number | boolean | ReactNode | undefined>;

export function useI18n() {
  const t = client.useI18n();
  return t as unknown as (key: string, params?: Params) => string;
}

export const {
  useScopedI18n,
  I18nProviderClient,
  useChangeLocale,
  useCurrentLocale,
} = client;
