import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AppProviders from "@/components/AppProviders";
import { GTProvider } from "gt-next";
import { locales } from "../../i18n/config";

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
  const locale = (await params).locale;

  return (
    <GTProvider key={locale} locale={locale}>
      <AppProviders locale={locale}>
        <Header />
        {children}
        <Footer />
      </AppProviders>
    </GTProvider>
  );
}
