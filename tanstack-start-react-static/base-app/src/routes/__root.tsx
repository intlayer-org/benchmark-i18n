import { useEffect, Profiler } from "react";
import type { ProfilerOnRenderCallback } from "react";
import {
  HeadContent,
  Link,
  Scripts,
  createRootRoute,
} from "@tanstack/react-router";
import { Route as LocaleRoute } from "./$locale/route";
import Footer from "../components/Footer";
import Header from "../components/Header";

import appCss from "../styles.css?url";

declare global {
  interface Window {
    __RENDER_METRICS__: Record<string, number[]>;
  }
}

const onRender: ProfilerOnRenderCallback = (id, phase, actualDuration) => {
  if (typeof window === "undefined") return;
  if (phase !== "update") return;
  window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {};
  window.__RENDER_METRICS__[id] = window.__RENDER_METRICS__[id] || [];
  window.__RENDER_METRICS__[id].push(actualDuration);
};

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
    console.log("--- BROWSER: RootDocument mounted");
    // 2. Mark the end of the hydration process
    performance.mark("hydration_end");

    // 3. Calculate the duration safely
    try {
      if (performance.getEntriesByName("hydration_start").length > 0) {
        performance.measure(
          "hydration_duration",
          "hydration_start",
          "hydration_end",
        );
        console.log("--- BROWSER: hydration_duration measured");

        // Optional: Log it for better debugging
        const duration =
          performance.getEntriesByName("hydration_duration")[0]?.duration;
        if (duration) {
          console.log(`Hydration Duration: ${duration.toFixed(2)}ms`);
        }
      } else {
        console.warn("--- BROWSER: hydration_start NOT FOUND");
      }
    } catch (err) {
      console.warn("Could not measure hydration duration:", err);
    }
  }, []);

  const { locale = defaultLocale } = LocaleRoute.useParams();

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
        <HeadContent />
      </head>
      <body className="antialiased [overflow-wrap:anywhere]">
        <Profiler id="AppRoot" onRender={onRender}>
          <Header />
          {children}
          <Footer />
        </Profiler>
        <Scripts />
      </body>
    </html>
  );
}
