import { TolgeeBase } from "@/tolgee/shared";
import AppProviders from "@/components/AppProviders";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { locales, defaultLocale, type Locale } from "../../i18n/config";
import { getMessages } from "@/i18n/getMessages";

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
  const { locale: rawLocale } = await params;
  const locale: Locale = (locales as readonly string[]).includes(rawLocale)
    ? (rawLocale as Locale)
    : defaultLocale;

    const messages = await getMessages(locale, [
      "common",
      "header",
      "footer",
      "themeToggle",
      "route",
      "mockBanner",
    ]);
    const staticData = { [locale]: messages };
    
  return (
    <AppProviders locale={locale} staticData={staticData}>
      <Header />
      {children}
      <Footer />
    </AppProviders>
  );
}
