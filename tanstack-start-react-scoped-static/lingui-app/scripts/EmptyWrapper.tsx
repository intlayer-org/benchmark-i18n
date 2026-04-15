import React from "react";
import { setupI18n } from "@lingui/core";
import { I18nProvider } from "@lingui/react";

const i18n = setupI18n();
i18n.load("en", {});
i18n.activate("en");

export default function EmptyWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <I18nProvider i18n={i18n}>{children}</I18nProvider>;
}
