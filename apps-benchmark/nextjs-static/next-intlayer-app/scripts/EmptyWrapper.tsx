import React from "react";
import { IntlayerClientProvider, useIntlayer } from "next-intlayer";

const TestComponent = () => {
  const content = useIntlayer("route" as never);
  void content;
  return null;
};

export default function EmptyWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <IntlayerClientProvider locale="en">
      <TestComponent />
      {children}
    </IntlayerClientProvider>
  );
}
