import React from "react";
import { NextIntlClientProvider, useTranslations } from "next-intl";

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
    <NextIntlClientProvider locale="en" messages={{}} timeZone="UTC">
      <TestComponent />
      {children}
    </NextIntlClientProvider>
  );
}
