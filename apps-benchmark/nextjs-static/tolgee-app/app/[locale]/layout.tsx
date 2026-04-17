import type { Metadata } from "next";
import { getTolgee, getTranslate } from "@/tolgee/server";
import AppProviders from "@/components/AppProviders";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { locales } from "../../i18n/config";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslate();
  return {
    title: t(
      "metadata.title",
      "i18n Benchmark",
    ),
    description: t(
      "metadata.description",
      "An open-source benchmark for measuring the real-world impact of internationalization libraries.",
    ),
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
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
