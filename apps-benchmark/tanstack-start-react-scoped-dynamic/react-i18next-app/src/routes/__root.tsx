import { useEffect, useLayoutEffect, useState } from "react";
import { useTranslation, I18nextProvider } from "react-i18next";
import {
  HeadContent,
  Link,
  Scripts,
  createRootRouteWithContext,
  useMatches,
  useRouter,
  useRouterState,
} from "@tanstack/react-router";
import type { i18n } from "i18next";

interface MyRouterContext {
  i18n: i18n;
}

import { Route as LocaleRoute } from "./$locale/route";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { defaultLocale } from "../i18n/config";

import appCss from "../styles.css?url";

import { recordHydrationDuration, recordRenderTime } from 'test-utils/browser-metrics';

const THEME_INIT_SCRIPT = `(function(){try{
  var stored=window.localStorage.getItem('theme');var mode=(stored==='light'||stored==='dark'||stored==='auto')?stored:'auto';var prefersDark=window.matchMedia('(prefers-color-scheme: dark)').matches;var resolved=mode==='auto'?(prefersDark?'dark':'light'):mode;var root=document.documentElement;root.classList.remove('light','dark');root.classList.add(resolved);if(mode==='auto'){root.removeAttribute('data-theme')}else{root.setAttribute('data-theme',mode)}root.style.colorScheme=resolved;performance.mark('hydration_start');}catch(e){}})();`;

export const Route = createRootRouteWithContext<MyRouterContext>()({
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
    const { t } = useTranslation("route");
    return (
      <div className="flex min-h-[60vh] items-center justify-center bg-muted/30">
      <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold">404</h1>
          <p className="mb-4 text-xl text-muted-foreground">
            {t("route.oopsPageNotFound")}
          </p>
          <Link
            to="/$locale"
            params={{ locale: defaultLocale || "en" }}
            className="text-primary underline hover:text-primary/90"
          >
            {t("route.returnToHome")}
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
  const matches = useMatches();
  const router = useRouter();
  const i18n = router.options.context!.i18n;

  // Restore namespaces from dehydrated loader data before any component renders
  matches.forEach((match) => {
    const data = match.loaderData as any;
    if (data?.resources) {
      for (const [ns, bundle] of Object.entries(data.resources)) {
        if (!i18n.hasResourceBundle(locale, ns)) {
          i18n.addResourceBundle(locale, ns, bundle as any);
        }
      }
    }
  });

  if (i18n.language !== locale) {
    i18n.changeLanguage(locale);
  }

  useEffect(() => {
    const handler = () => {
      router.invalidate();
    };

    i18n.on("languageChanged", handler);
    return () => {
      i18n.off("languageChanged", handler);
    };
  }, [i18n]);

  return (
    <I18nextProvider i18n={i18n}>
      <html lang={locale} suppressHydrationWarning>
        <head>
          <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
          <HeadContent />
        </head>
        <body className="antialiased [overflow-wrap:anywhere]">
            <Header />
            {children}
            <Footer />
          <Scripts />
        </body>
      </html>
    </I18nextProvider>
  );
}
