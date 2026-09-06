import { IntlayerClientProvider } from "next-intlayer";
import { useTranslation } from "react-i18next";

const TestComponent = () => {
  const { i18n, t } = useTranslation();

  void t;
  void i18n.language;

  return <></>;
};

export default function EmptyComponent() {
  return (
    <IntlayerClientProvider locale="en">
      <TestComponent />
    </IntlayerClientProvider>
  );
}
