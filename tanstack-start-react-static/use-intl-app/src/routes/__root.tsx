import { useEffect, Profiler } from "react";
import type { ProfilerOnRenderCallback } from "react";
import { IntlProvider, useTranslations } from "use-intl";
import {
  HeadContent,
  Link,
  Scripts,
  createRootRoute,
} from "@tanstack/react-router";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { defaultLocale } from "../i18n/config";
import { Route as LocaleRoute } from "./$locale/route";

import appCss from "../styles.css?url";

import { recordHydrationDuration, onRenderCallback as onRender } from "test-utils/browser-metrics";

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
  notFoundComponent: NotFound,
});

function NotFound() {
  const t = useTranslations("route");
  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-muted/30">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-muted-foreground">
          {t("oopsPageNotFound")}
        </p>
        <Link
          to="/$locale"
          params={{
            locale: (Route.useParams() as any).locale ?? defaultLocale,
          }}
          className="text-primary underline hover:text-primary/90"
        >
          {t("returnToHome")}
        </Link>
      </div>
    </div>
  );
}

function RootDocument({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    recordHydrationDuration();
  }, []);

  const { locale = defaultLocale } = LocaleRoute.useParams();
  const { messages } = LocaleRoute.useLoaderData();

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
        <HeadContent />
      </head>
      <body className="antialiased [overflow-wrap:anywhere]">
        <Profiler id="AppRoot" onRender={onRender}>
          <IntlProvider
            messages={messages}
            locale={locale}
            timeZone="UTC"
            now={new Date()}
          >
            <Header />
            {children}
            <Footer />
          </IntlProvider>
        </Profiler>
        <Scripts />
      </body>
    </html>
  );
}
