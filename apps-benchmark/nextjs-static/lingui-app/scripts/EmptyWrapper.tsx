import React from "react";
import { setupI18n } from "@lingui/core";
import { I18nProvider, useLingui } from "@lingui/react";

const TestComponent = () => {
  const { _, i18n } = useLingui();

  void _;
  void i18n.locale;

  return null;
};

export default function EmptyWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const i18n = setupI18n();
  i18n.load("en", {});
  i18n.activate("en");

  return (
    <I18nProvider i18n={i18n}>
      <TestComponent />
      {children}
    </I18nProvider>
  );
}
