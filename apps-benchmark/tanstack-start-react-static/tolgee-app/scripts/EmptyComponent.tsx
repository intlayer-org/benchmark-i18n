import React from "react";
import { useTolgee } from "@tolgee/react";
import { useTranslate } from "../src/i18n/config";

export default function EmptyComponent() {
  const tolgee = useTolgee();
  const { t } = useTranslate();

  void t;
  void tolgee.getLanguage();

  return <></>;
}
