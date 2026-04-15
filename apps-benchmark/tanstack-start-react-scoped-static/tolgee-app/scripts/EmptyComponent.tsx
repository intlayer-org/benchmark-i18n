import React from "react";
import { useTolgee, useTranslate } from "@tolgee/react";

export default function EmptyComponent() {
  const tolgee = useTolgee();
  const { t } = useTranslate();

  void t;
  void tolgee.getLanguage();

  return <></>;
}
