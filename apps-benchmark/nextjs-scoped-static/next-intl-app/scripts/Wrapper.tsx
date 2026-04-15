import React from "react";
import AppProviders from "../components/AppProviders";
import messages from "../i18n/enMessages";

const locale = "en";

export default function Wrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AppProviders locale={locale} messages={messages}>
      {children}
    </AppProviders>
  );
}
