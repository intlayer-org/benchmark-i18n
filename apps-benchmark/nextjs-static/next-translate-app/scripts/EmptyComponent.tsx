"use client";

import React from "react";
import I18nProvider from "next-translate/I18nProvider";
import useTranslation from "next-translate/useTranslation";

const TestComponent = () => {
  const { t } = useTranslation("common");
  void t;
  return null;
};

export default function EmptyComponent() {
  return (
    <I18nProvider lang="en" namespaces={{}}>
      <TestComponent />
    </I18nProvider>
  );
}
