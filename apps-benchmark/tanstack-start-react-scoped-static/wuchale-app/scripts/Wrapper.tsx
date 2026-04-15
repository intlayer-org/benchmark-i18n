import React from "react";
import { loadLocale } from "wuchale/load-utils";
import "../src/i18n/loaders";

loadLocale("en");

export default function Wrapper({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
