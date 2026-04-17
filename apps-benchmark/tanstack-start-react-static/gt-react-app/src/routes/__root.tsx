import { useEffect, useLayoutEffect } from 'react';

import {
  HeadContent,
  Link,
  Scripts,
  createRootRoute,
} from "@tanstack/react-router";
import { Route as LocaleRoute } from "./$locale/route";
import Footer from "../components/Footer";
import Header from "../components/Header";

import { T } from "gt-react";

import { GTProvider } from "gt-tanstack-start";


import appCss from "../styles.css?url";

import { recordHydrationDuration, recordRenderTime } from 'test-utils/browser-metrics';


const defaultLocale = "en";

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
      <T>
          <div className="text-center">
            <h1 className="mb-4 text-4xl font-bold">404</h1>
            <p className="mb-4 text-xl text-muted-foreground">
              Oops! Page not found
            </p>
            <Link
              to="/$locale"
              params={{ locale: defaultLocale || "en" }}
              className="text-primary underline hover:text-primary/90"
            >
              Return to Home
            </Link>
          </div>
      </T>
      </div>
    );
  },
});

function RootDocument({ children }: { children: React.ReactNode }) {
  const renderStart =
    typeof performance !== 'undefined' ? performance.now() : 0;
  useLayoutEffect(() => {
    recordRenderTime('AppRoot', renderStart);
  });

  useEffect(() => {
    recordHydrationDuration();
  }, []);

  const { translations, locale } = LocaleRoute.useLoaderData();

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
      <HeadContent />
      </head>
      <body className="antialiased [overflow-wrap:anywhere]">
          <GTProvider key={locale} locale={locale} translations={translations}>
            <Header />
            {children}
            <Footer />
          </GTProvider>
      <Scripts />
      </body>
    </html>
  );
}
