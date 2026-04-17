import { I18nProvider } from "next-i18next/client";
import { useTranslation } from "react-i18next";

const TestComponent = () => {
  const { i18n, t } = useTranslation();

  void t;
  void i18n.language;

  return <></>;
};

export default function EmptyComponent() {
  return (
    <I18nProvider language="en">
      <TestComponent />
    </I18nProvider>
  );
}
