import React, { use } from "react";
import { IntlProvider } from "use-intl";
import { getMessages } from "../src/i18n/getMessages";

const messagesPromise = getMessages("en");

export default function Wrapper({ children }: { children: React.ReactNode }) {
  const messages = use(messagesPromise);

  return (
    <React.Suspense fallback={null}>
      <IntlProvider
        messages={messages as any}
        locale="en"
        timeZone="UTC"
        now={new Date("2024-01-01")}
      >
        {children}
      </IntlProvider>
    </React.Suspense>
  );
}
