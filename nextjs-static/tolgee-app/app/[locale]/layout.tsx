import { getLanguage } from "@/tolgee/language";
import { getTolgee } from "@/tolgee/server";
import AppProviders from "@/components/AppProviders";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { locales } from "../../i18n/config";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLanguage();
  const tolgee = await getTolgee();
  const staticData = await tolgee.loadRequired();

  return (
    <AppProviders locale={locale} staticData={staticData}>
      <Header />
      {children}
      <Footer />
    </AppProviders>
  );
}
