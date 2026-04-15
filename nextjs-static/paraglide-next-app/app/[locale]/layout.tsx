import { cache } from "react";
import type { Metadata } from "next";
import { headers } from "next/headers";
import {
  assertIsLocale,
  baseLocale,
  getLocale,
  getTextDirection,
  overwriteGetLocale,
  overwriteGetUrlOrigin,
  type Locale,
} from "../../paraglide/runtime.js";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AppProviders from "../../components/AppProviders";
import "./../globals.css";
import Script from "next/script.js";

export const metadata: Metadata = {
  title: "i18n Benchmark",
  description:
    "An open-source benchmark for measuring the real-world impact of internationalization libraries.",
};

// needed for SSG
export function generateStaticParams() {
  return [
    { locale: "en" },
    { locale: "fr" },
    { locale: "es" },
    { locale: "de" },
    { locale: "it" },
    { locale: "pt" },
    { locale: "zh" },
    { locale: "ja" },
    { locale: "ko" },
    { locale: "ru" },
  ];
}

const THEME_INIT_SCRIPT = `(function(){try{
  var stored=window.localStorage.getItem('theme');var mode=(stored==='light'||stored==='dark'||stored==='auto')?stored:'auto';var prefersDark=window.matchMedia('(prefers-color-scheme: dark)').matches;var resolved=mode==='auto'?(prefersDark?'dark':'light'):mode;var root=document.documentElement;root.classList.remove('light','dark');root.classList.add(resolved);if(mode==='auto'){root.removeAttribute('data-theme')}else{root.setAttribute('data-theme',mode)}root.style.colorScheme=resolved;performance.mark('hydration_start');}catch(e){}})();`;

// scopes the locale per request
const ssrLocale = cache(() => ({
  locale: baseLocale,
  origin: "http://localhost",
}));

// overwrite the getLocale function to use the locale from the request
overwriteGetLocale(() => assertIsLocale(ssrLocale().locale));
overwriteGetUrlOrigin(() => ssrLocale().origin);

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  ssrLocale().locale = assertIsLocale(locale);

  return (
    <html lang={getLocale()} dir={getTextDirection()} suppressHydrationWarning>
      <body className="antialiased [overflow-wrap:anywhere]">
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }}
        />
        <AppProviders>
          <Header />
          {children}
          <Footer />
        </AppProviders>
      </body>
    </html>
  );
}
