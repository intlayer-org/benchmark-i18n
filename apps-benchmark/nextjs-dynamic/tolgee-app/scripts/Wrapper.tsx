import React from "react";
import AppProviders from "../components/AppProviders";
import en from "../i18n/locales/en.json";
import type { TolgeeStaticData } from "@tolgee/react";

const locale = "en";
const staticData = { en } as unknown as TolgeeStaticData;

export default function Wrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AppProviders locale={locale} staticData={staticData}>
      {children}
    </AppProviders>
  );
}
