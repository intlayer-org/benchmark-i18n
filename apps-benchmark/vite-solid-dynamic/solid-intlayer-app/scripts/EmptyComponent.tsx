import { Locales } from "intlayer";
import { IntlayerProvider, useIntlayer } from "solid-intlayer";

const TestComponent = () => {
  const content = useIntlayer("header" as never);
  void content;
  return null;
};

export default function EmptyComponent() {
  return (
    <IntlayerProvider locale={Locales.ENGLISH}>
      <TestComponent />
    </IntlayerProvider>
  );
}
