import React from "react";
import AppProviders from "../components/AppProviders";
import messages from "../messages/en.json";

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
