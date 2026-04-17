import React from "react";
import { IntlayerProvider, useIntlayer } from "react-intlayer";

const TestComponent = () => {
  const content = useIntlayer("route" as never);
  void content;
  return null;
};

export default function EmptyComponent() {
  return (
    <IntlayerProvider locale="en">
      <TestComponent />
    </IntlayerProvider>
  );
}
