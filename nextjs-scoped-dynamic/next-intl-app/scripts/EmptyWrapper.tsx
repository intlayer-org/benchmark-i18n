import React from "react";
import { NextIntlClientProvider } from "next-intl";

export default function EmptyWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <NextIntlClientProvider locale="en" messages={{}} timeZone="UTC">
      {children}
    </NextIntlClientProvider>
  );
}
