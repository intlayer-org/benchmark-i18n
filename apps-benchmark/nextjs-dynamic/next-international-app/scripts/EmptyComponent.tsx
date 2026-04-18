import React from "react";
import { I18nProviderClient, useI18n, useCurrentLocale } from "../locales/client";

const TestComponent = () => {
  const t = useI18n();
  void t;
  return null;
};

export default function EmptyComponent() {
  const locale = useCurrentLocale();

  return (
    <I18nProviderClient locale={locale}>
      <TestComponent />
    </I18nProviderClient>
  );
}
