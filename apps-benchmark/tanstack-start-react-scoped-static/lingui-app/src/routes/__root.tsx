import { useEffect, useLayoutEffect, useMemo, useState } from "react";
import { I18nProvider } from "@lingui/react";
import {
  HeadContent,
  Link,
  Scripts,
  createRootRoute,
  useRouterState,
} from "@tanstack/react-router";
import { Route as LocaleRoute } from "./$locale/route";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { defaultLocale, initLingui } from "../i18n/lingui";
import appCss from "../styles.css?url";

import { recordHydrationDuration, recordRenderTime } from 'test-utils/browser-metrics';


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
      </div>
    );
  },
});

function RootDocument({ children }: { children: React.ReactNode }) {
  const [renderStart] = useState(() =>
    typeof performance !== "undefined" ? performance.now() : 0
  );

  useLayoutEffect(() => {
    recordRenderTime("AppRoot", renderStart);
  }, [renderStart]);

  useEffect(() => {
    recordHydrationDuration();
  }, []);

  const { locale: committedLocale = defaultLocale } = LocaleRoute.useParams();
  const pendingLocale = useRouterState({
    select: (s) =>
      (s.pendingMatches as any)?.find((m: any) => m.params?.locale)?.params?.locale as string | undefined,
  });
  const locale = pendingLocale ?? committedLocale;
  const { messages } = LocaleRoute.useLoaderData();
  const i18n = useMemo(() => initLingui(locale, messages), [locale, messages]);

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
      <HeadContent />
      </head>
      <body className="antialiased [overflow-wrap:anywhere]">
          <I18nProvider i18n={i18n}>
            <Header />
            {children}
            <Footer />
          </I18nProvider>
      <Scripts />
      </body>
    </html>
  );
}
