export const localesMap = {
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
} as const;
