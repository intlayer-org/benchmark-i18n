import { createNextMiddleware } from "gt-next/middleware";

// gt-next resolves the request locale from what its middleware sets; without it
// every server-rendered <T> falls back to the default locale.
export default createNextMiddleware({
  localeRouting: true,
  prefixDefaultLocale: true,
});

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
