import React from "react";
import { initializeGT, GTProvider, useTranslations } from "gt-tanstack-start";
import gtConfig from "../gt.config.json";

initializeGT({
  // @ts-ignore
  ...gtConfig,
  loadTranslations: async () => ({}),
});

const TestComponent = () => {
  const t = useTranslations();
  void t;
  return null;
};

export default function EmptyWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <GTProvider locale="en" translations={{}}>
      <TestComponent />
      {children}
    </GTProvider>
  );
}
