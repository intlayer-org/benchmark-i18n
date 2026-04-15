import React from "react";
import { useLocale, useTranslations } from "next-intl";

export default function EmptyComponent() {
  const t = useTranslations();
  const locale = useLocale();

  void t;
  void locale;

  return <></>;
}
