import React from "react";
import { I18nProviderClient, useI18n } from "../locales/client";

const TestComponent = () => {
  const t = useI18n();
  void t;
  return null;
};

export default function EmptyComponent() {
  return (
    <I18nProviderClient locale="en">
      <TestComponent />
    </I18nProviderClient>
  );
}
