import React from "react";
import AppProviders from "../components/AppProviders";
import { messages as enMessages } from "../locales/en/messages.mjs";

export default function Wrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AppProviders locale="en" messages={enMessages}>
      {children}
    </AppProviders>
  );
}
