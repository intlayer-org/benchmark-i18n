import React from "react";
import AppProviders from "../components/AppProviders";
import { getAllMessages } from "../i18n/getMessages";

const locale = "en";

export default async function Wrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const messages = await getAllMessages(locale);
  return (
    <AppProviders locale={locale} messages={messages}>
      {children}
    </AppProviders>
  );
}
