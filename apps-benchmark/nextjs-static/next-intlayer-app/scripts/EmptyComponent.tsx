import React from "react";
import { IntlayerClientProvider, useIntlayer } from "next-intlayer";

const TestComponent = () => {
  const content = useIntlayer("header" as never);
  void content;
  return null;
};

export default function EmptyComponent() {
  return (
    <IntlayerClientProvider locale="en">
      <TestComponent />
    </IntlayerClientProvider>
  );
}
