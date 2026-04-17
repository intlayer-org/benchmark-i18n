import React from "react";
import { IntlProvider, useTranslations } from "use-intl";

const TestComponent = () => {
  const t = useTranslations();
  void t;
  return null;
};

export default function EmptyWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <IntlProvider locale="en" messages={{}} timeZone="UTC">
      <TestComponent />
      {children}
    </IntlProvider>
  );
}
