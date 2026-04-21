import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AppProviders from "../../components/AppProviders";
import { LINGUI_LAYOUT_NAMESPACES, loadNamespaces, locales } from "../../i18n/lingui";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await loadNamespaces(locale, LINGUI_LAYOUT_NAMESPACES);

  return (
    <AppProviders locale={locale} messages={messages}>
      <Header />
      {children}
      <Footer />
    </AppProviders>
  );
}
