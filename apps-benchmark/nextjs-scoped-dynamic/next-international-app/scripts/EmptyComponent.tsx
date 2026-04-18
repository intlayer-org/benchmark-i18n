"use client";

import React from "react";
import { I18nProviderClient, useScopedI18n, useCurrentLocale } from "../locales/client";

const TestComponent = () => {
  const scopedT = useScopedI18n("header");
  void scopedT;
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
