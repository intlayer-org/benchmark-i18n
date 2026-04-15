import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AppProviders from "../../components/AppProviders";
import { LingoProvider } from "@lingo.dev/compiler/react";
import Script from "next/script";

const THEME_INIT_SCRIPT = `(function(){try{
  var stored=window.localStorage.getItem('theme');var mode=(stored==='light'||stored==='dark'||stored==='auto')?stored:'auto';var prefersDark=window.matchMedia('(prefers-color-scheme: dark)').matches;var resolved=mode==='auto'?(prefersDark?'dark':'light'):mode;var root=document.documentElement;root.classList.remove('light','dark');root.classList.add(resolved);if(mode==='auto'){root.removeAttribute('data-theme')}else{root.setAttribute('data-theme',mode)}root.style.colorScheme=resolved;performance.mark('hydration_start');}catch(e){}})();`;

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <LingoProvider initialLocale={locale as "en"}>
      <html suppressHydrationWarning>
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
    </LingoProvider>
  );
}
