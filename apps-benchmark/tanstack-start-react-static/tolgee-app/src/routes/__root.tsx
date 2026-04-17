import { useEffect, Profiler } from "react";

import {
  HeadContent,
  Link,
  Scripts,
  createRootRoute,
} from "@tanstack/react-router";
import { TolgeeProvider } from "@tolgee/react";
import { T } from "../i18n/config";
import { Route as LocaleRoute } from "./$locale/route";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { tolgee } from "../i18n/tolgee";
import { defaultLocale } from "../i18n/config";

import appCss from "../styles.css?url";

import {
  recordHydrationDuration,
  onRenderCallback as onRender,
} from "test-utils/browser-metrics";
import { messageModules } from "#/i18n/getMessages";

// onRender now imported from test-utils

const THEME_INIT_SCRIPT = `(function(){try{
  var stored=window.localStorage.getItem('theme');var mode=(stored==='light'||stored==='dark'||stored==='auto')?stored:'auto';var prefersDark=window.matchMedia('(prefers-color-scheme: dark)').matches;var resolved=mode==='auto'?(prefersDark?'dark':'light'):mode;var root=document.documentElement;root.classList.remove('light','dark');root.classList.add(resolved);if(mode==='auto'){root.removeAttribute('data-theme')}else{root.setAttribute('data-theme',mode)}root.style.colorScheme=resolved;performance.mark('hydration_start');}catch(e){}})();`;

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "i18n Benchmark",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootDocument,
  notFoundComponent: () => {
    return (
      <div className="flex min-h-[60vh] items-center justify-center bg-muted/30">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold">404</h1>
          <p className="mb-4 text-xl text-muted-foreground">
            <T
              keyName="route.oopsPageNotFound"
              defaultValue="Oops! Page not found"
            />
          </p>
          <Link
            to="/$locale"
            params={{ locale: defaultLocale || "en" }}
            className="text-primary underline hover:text-primary/90"
          >
            <T keyName="route.returnToHome" defaultValue="Return to Home" />
          </Link>
        </div>
      </div>
    );
  },
});

function RootDocument({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    recordHydrationDuration();
  }, []);

  const { locale = defaultLocale } = LocaleRoute.useParams();

  // Set language on server-side or if it changed
  if (typeof window === "undefined" || tolgee.getLanguage() !== locale) {
    tolgee.changeLanguage(locale);
  }

  useEffect(() => {
    if (tolgee.getLanguage() !== locale) {
      tolgee.changeLanguage(locale);
    }
  }, [locale]);

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
        <HeadContent />
      </head>
      <body className="antialiased [overflow-wrap:anywhere]">
        <Profiler id="AppRoot" onRender={onRender}>
          <TolgeeProvider
            tolgee={tolgee}
            fallback={<div>Loading translations...</div>}
            options={{ useSuspense: false }}
            ssr={{
              language: locale,
              staticData: messageModules,
            }}
          >
            <Header />
            {children}
            <Footer />
          </TolgeeProvider>
        </Profiler>
        <Scripts />
      </body>
    </html>
  );
}
