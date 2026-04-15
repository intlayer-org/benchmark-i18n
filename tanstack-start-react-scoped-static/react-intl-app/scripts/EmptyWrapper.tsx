import React from "react";
import { IntlProvider } from "react-intl";

export default function EmptyWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <IntlProvider locale="en" defaultLocale="en" messages={{}}>
      {children}
    </IntlProvider>
  );
}
