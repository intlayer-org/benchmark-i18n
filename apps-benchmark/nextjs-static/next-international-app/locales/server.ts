import { createI18nServer } from "next-international/server";
import { localesMap } from "./locales-map";

export const { getI18n, getScopedI18n, getStaticParams, getCurrentLocale } =
  createI18nServer(localesMap);
