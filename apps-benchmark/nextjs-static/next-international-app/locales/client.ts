"use client";

import { createI18nClient } from "next-international/client";
import type { ReactNode } from "react";
import { localesMap } from "./locales-map";

const client = createI18nClient(localesMap);

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
