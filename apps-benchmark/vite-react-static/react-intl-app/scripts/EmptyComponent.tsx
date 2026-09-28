import React from "react";
import { IntlProvider, useIntl } from "react-intl";

const TestComponent = () => {
  const intl = useIntl();
  void intl.locale;
  return null;
};

export default function EmptyComponent() {
  return (
    <IntlProvider locale="en" defaultLocale="en" messages={{}}>
      <TestComponent />
    </IntlProvider>
  );
}
