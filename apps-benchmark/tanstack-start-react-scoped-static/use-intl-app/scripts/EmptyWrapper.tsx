import React from "react";
import { IntlProvider } from "use-intl";

export default function EmptyWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <IntlProvider locale="en" messages={{}} timeZone="UTC">
      {children}
    </IntlProvider>
  );
}
