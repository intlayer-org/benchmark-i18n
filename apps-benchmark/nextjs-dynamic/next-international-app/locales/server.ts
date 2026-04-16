import { createI18nServer } from "next-international/server";

export const { getI18n, getScopedI18n, getStaticParams, getCurrentLocale } =
  createI18nServer({
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
