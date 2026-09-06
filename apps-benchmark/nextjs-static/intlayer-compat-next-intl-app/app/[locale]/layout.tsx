import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AppProviders from "../../components/AppProviders";
import { locales } from "../../i18n/config";
import { setRequestLocale } from "next-intl/server";

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
  // next-intl's documented pattern for static rendering: forwards the
  // `[locale]` segment so server-side translation reads resolve to it.
  setRequestLocale(locale);

  return (
    <AppProviders locale={locale}>
      <Header />
      {children}
      <Footer />
    </AppProviders>
  );
}
