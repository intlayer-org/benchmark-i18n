import { isLocale } from "./i18n/config";

const PAGE_SEGMENTS = new Set([
  "",
  "about",
  "blog",
  "careers",
  "contact",
  "faq",
  "pricing",
  "products",
  "settings",
  "team",
]);

export type ParsedRoute =
  | { kind: "ok"; locale: string; page: string }
  | { kind: "notfound" };

export function parsePath(pathname: string): ParsedRoute {
  const parts = pathname.split("/").filter(Boolean);
  if (parts.length === 0) {
    return { kind: "notfound" };
  }
  const [locale, ...rest] = parts;
  if (!isLocale(locale)) {
    return { kind: "notfound" };
  }
  const seg = rest[0] ?? "";
  if (rest.length > 1) {
    return { kind: "notfound" };
  }
  if (!PAGE_SEGMENTS.has(seg)) {
    return { kind: "notfound" };
  }
  return { kind: "ok", locale, page: seg };
}
