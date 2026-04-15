import type { Metadata } from "next";
import "./globals.css";
import { getLanguage } from "@/tolgee/language";
import { getTolgee } from "@/tolgee/server";
import AppProviders from "@/components/AppProviders";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Script from "next/script";

export const metadata: Metadata = {
  title: "i18n Benchmark",
  description:
    "An open-source benchmark for measuring the real-world impact of internationalization libraries.",
};

const THEME_INIT_SCRIPT = `(function(){try{
  var stored=window.localStorage.getItem('theme');var mode=(stored==='light'||stored==='dark'||stored==='auto')?stored:'auto';var prefersDark=window.matchMedia('(prefers-color-scheme: dark)').matches;var resolved=mode==='auto'?(prefersDark?'dark':'light'):mode;var root=document.documentElement;root.classList.remove('light','dark');root.classList.add(resolved);if(mode==='auto'){root.removeAttribute('data-theme')}else{root.setAttribute('data-theme',mode)}root.style.colorScheme=resolved;performance.mark('hydration_start');}catch(e){}})();`;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLanguage();
  const tolgee = await getTolgee();
  // serializable data that are passed to client components
  const staticData = await tolgee.loadRequired();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className="antialiased [overflow-wrap:anywhere]">
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }}
        />
        <AppProviders locale={locale} staticData={staticData}>
          <Header />
          {children}
          <Footer />
        </AppProviders>
      </body>
    </html>
  );
}
