import React from "react";
import { initializeGT, GTProvider } from "gt-tanstack-start";
import gtConfig from "../gt.config.json";
import loadTranslations from "../loadTranslations";

initializeGT({
  // @ts-ignore
  ...gtConfig,
  loadTranslations,
});

export default function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <GTProvider locale="en">
      {children}
    </GTProvider>
  );
}
