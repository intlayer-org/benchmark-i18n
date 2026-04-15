import React from "react";
import { initializeGT, GTProvider } from "gt-tanstack-start";
import gtConfig from "../gt.config.json";

initializeGT({
  // @ts-ignore
  ...gtConfig,
  loadTranslations: async () => ({}),
});

export default function EmptyWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <GTProvider locale="en" translations={{}}>
      {children}
    </GTProvider>
  );
}
