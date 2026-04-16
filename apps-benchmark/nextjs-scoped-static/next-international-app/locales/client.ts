"use client";

import { createI18nClient } from "next-international/client";
import { localesMap } from "./locales-map";

const client = createI18nClient(localesMap);

export const useScopedI18n = client.useScopedI18n as (
  scope: string
) => (key: string, ...params: unknown[]) => string;

export const {
  I18nProviderClient,
  useChangeLocale,
  useCurrentLocale,
} = client;
