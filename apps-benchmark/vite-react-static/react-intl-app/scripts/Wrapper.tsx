import React, { use } from "react";
import { IntlProvider } from "react-intl";
import { getMessages } from "../src/i18n/getMessages";

const messagesPromise = getMessages("en");

export default function Wrapper({ children }: { children: React.ReactNode }) {
  const messages = use(messagesPromise);

  return (
    <React.Suspense fallback={null}>
      <IntlProvider
        messages={messages}
        locale="en"
        defaultLocale="en"
      >
        {children}
      </IntlProvider>
    </React.Suspense>
  );
}
