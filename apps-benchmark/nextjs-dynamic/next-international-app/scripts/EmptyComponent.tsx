import React from "react";
import { useI18n, useCurrentLocale } from "../locales/client";

export default function EmptyComponent() {
  const t = useI18n();
  const locale = useCurrentLocale();

  void t;
  void locale;

  return <></>;
}
