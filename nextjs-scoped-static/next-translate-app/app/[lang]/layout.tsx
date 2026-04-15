import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AppProviders from "../../components/AppProviders";
import i18nConfig from "../../i18n.mjs";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const locale = (await params).lang || i18nConfig.defaultLocale!;

  return (
    <AppProviders locale={locale}>
      <Header />
      {children}
      <Footer />
    </AppProviders>
  );
}
