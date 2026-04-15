import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AppProviders from "../../components/AppProviders";
import { getMessages } from "../../i18n/getMessages";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = getMessages(locale, ["shared"] as const);

  return (
    <AppProviders locale={locale} messages={messages}>
      <Header />
      {children}
      <Footer />
    </AppProviders>
  );
}
