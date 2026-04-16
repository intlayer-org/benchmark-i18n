import { createI18nServer } from "next-international/server";
import { localesMap } from "./locales-map";

const server = createI18nServer(localesMap);

export const getScopedI18n = server.getScopedI18n as (
  scope: string
) => Promise<(key: string, ...params: unknown[]) => string>;

export const { getStaticParams, getCurrentLocale } = server;
