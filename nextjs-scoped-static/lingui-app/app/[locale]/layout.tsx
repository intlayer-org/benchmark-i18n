import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AppProviders from "../../components/AppProviders";
import { getMessages, LINGUI_ALL_NAMESPACES } from "../../i18n/lingui";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages(locale, [...LINGUI_ALL_NAMESPACES]);

  return (
    <AppProviders locale={locale} messages={messages}>
      <Header />
      {children}
      <Footer />
    </AppProviders>
  );
}
