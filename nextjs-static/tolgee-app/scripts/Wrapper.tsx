import React from "react";
import AppProviders from "../components/AppProviders";
import { getMessages } from "../i18n/getMessages";

const locale = "en";
const staticData = getMessages(locale);

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
