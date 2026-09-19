import { IntlayerProvider } from "next-intlayer";
import { useTranslation } from "react-i18next";

const TestComponent = () => {
  const { i18n, t } = useTranslation();

  void t;
  void i18n.language;

  return <></>;
};

export default function EmptyComponent() {
  return (
    <IntlayerProvider locale="en">
      <TestComponent />
    </IntlayerProvider>
  );
}
