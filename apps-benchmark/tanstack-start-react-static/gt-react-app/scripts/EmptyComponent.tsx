import React from "react";
import { GTProvider, useTranslations } from "gt-tanstack-start";

const TestComponent = () => {
  const t = useTranslations();
  void t;
  return null;
};

export default function EmptyComponent() {
  return (
    <GTProvider locale="en" translations={{}}>
      <TestComponent />
    </GTProvider>
  );
}
