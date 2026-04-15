import React from "react";
import { useLocale, useTranslations } from "gt-react";

export default function EmptyComponent() {
  const t = useTranslations();
  const locale = useLocale();

  void t;
  void locale;

  return <></>;
}
