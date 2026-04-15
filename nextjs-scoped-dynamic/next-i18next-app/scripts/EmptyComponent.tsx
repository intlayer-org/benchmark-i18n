import React from "react";
import { useTranslation } from "react-i18next";

export default function EmptyComponent() {
  const { i18n, t } = useTranslation();

  void t;
  void i18n.language;

  return <></>;
}
