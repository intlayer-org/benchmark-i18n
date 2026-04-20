import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AppProviders from "../../components/AppProviders";
import { locales, type Locale, type Namespace } from "../../i18n/config";
import { initI18next } from "../../i18n/server";
import type { ResourceLanguage } from "i18next";

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
  const layoutNamespaces: Namespace[] = ["shared"];
  const i18n = await initI18next(locale, layoutNamespaces);

  const resources = Object.fromEntries(
    layoutNamespaces.map((ns) => [ns, i18n.getResourceBundle(locale, ns)]),
  ) as Record<string, ResourceLanguage>;

  return (
    <AppProviders initialResources={resources}>
      <Header />
      {children}
      <Footer />
    </AppProviders>
  );
}
