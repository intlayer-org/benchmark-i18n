import type { Metadata } from "next";
import { TolgeeBase } from "@/tolgee/shared";
import AppProviders from "@/components/AppProviders";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { locales } from "../../i18n/config";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const tolgee = TolgeeBase().init({ language: locale });
  await tolgee.loadRequired();

  return {
    title: tolgee.t("metadata.title", "i18n Benchmark"),
    description: tolgee.t(
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
  const tolgee = TolgeeBase().init({ language: locale });
  const staticData = await tolgee.loadRequired();

  return (
    <AppProviders locale={locale} staticData={staticData}>
      <Header />
      {children}
      <Footer />
    </AppProviders>
  );
}
