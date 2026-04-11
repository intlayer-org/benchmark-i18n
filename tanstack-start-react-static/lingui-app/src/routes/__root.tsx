import { useEffect, Profiler, useMemo, use, Suspense } from "react";
import { I18nProvider } from "@lingui/react";
import {
  HeadContent,
  Link,
  Scripts,
  createRootRoute,
  useRouterState,
} from "@tanstack/react-router";
import Footer from "../components/Footer";
import Header from "../components/Header";
import {
  defaultLocale,
  initLingui,
  loadMessages,
  locales,
} from "../i18n/lingui";
import appCss from "../styles.css?url";

import {
  recordHydrationDuration,
  onRenderCallback as onRender,
} from "test-utils/browser-metrics";

// onRender now imported from test-utils

const THEME_INIT_SCRIPT = `(function(){try{
  var stored=window.localStorage.getItem('theme');var mode=(stored==='light'||stored==='dark'||stored==='auto')?stored:'auto';var prefersDark=window.matchMedia('(prefers-color-scheme: dark)').matches;var resolved=mode==='auto'?(prefersDark?'dark':'light'):mode;var root=document.documentElement;root.classList.remove('light','dark');root.classList.add(resolved);if(mode==='auto'){root.removeAttribute('data-theme')}else{root.setAttribute('data-theme',mode)}root.style.colorScheme=resolved;performance.mark('hydration_start');}catch(e){}})();`;

// 1. Cache the promise so it doesn't refetch on every render
const messagePromiseCache = new Map<string, Promise<any>>();
function getMessagesPromise(locale: string) {
  if (!messagePromiseCache.has(locale)) {
    messagePromiseCache.set(locale, loadMessages(locale));
  }
  return messagePromiseCache.get(locale)!;
}

// 2. Async Provider to suspend while messages load on Client/Server
function AsyncLinguiProvider({
  locale,
  children,
}: {
  locale: string;
  children: React.ReactNode;
}) {
  const messages = use(getMessagesPromise(locale));
  const i18n = useMemo(() => initLingui(locale, messages), [locale, messages]);

  return <I18nProvider i18n={i18n}>{children}</I18nProvider>;
}

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
  useEffect(() => {
    recordHydrationDuration();
  }, []);

  // 3. Safely extract locale from global router state (avoids strict hook crashes on 404s)
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const pathSegment = pathname.split("/")[1];
  const locale = locales.includes(pathSegment as any)
    ? pathSegment
    : defaultLocale;

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
        <HeadContent />
      </head>
      <body className="antialiased [overflow-wrap:anywhere]">
        <Profiler id="AppRoot" onRender={onRender}>
          {/* 4. Wrap with Suspense and the new Async Provider */}
          <Suspense fallback={null}>
            <AsyncLinguiProvider locale={locale}>
              <Header />
              {children}
              <Footer />
            </AsyncLinguiProvider>
          </Suspense>
        </Profiler>
        <Scripts />
      </body>
    </html>
  );
}
