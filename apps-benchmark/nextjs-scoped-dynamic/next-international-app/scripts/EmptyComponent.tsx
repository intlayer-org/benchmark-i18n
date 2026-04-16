"use client";

import { useScopedI18n, useCurrentLocale } from "../locales/client";

export default function EmptyComponent() {
  const scopedT = useScopedI18n("header");
  const locale = useCurrentLocale();
  void scopedT;
  void locale;
  return null;
}
