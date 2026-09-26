import i18next from "i18next";
import resourcesToBackend from "i18next-resources-to-backend";
import { createSignal } from "solid-js";

export const [t, setT] = createSignal(i18next.t.bind(i18next));

// Dynamic variant: each locale's catalog is its own chunk, fetched by
// `changeLanguage` (see Layout) the first time the locale is used.
i18next
  .use(
    resourcesToBackend(
      (language: string) => import(`../locales/${language}.json`),
    ),
  )
  .init({
    fallbackLng: "en",
  });

setT(() => i18next.t.bind(i18next));

/**
 * Prefer this over `const tt = t()` in components. Solid runs the component body once;
 * caching `t()` freezes the old bound `i18next.t`. Each `trans()` call reads the signal
 * again so locale switches re-render.
 */
export function trans(
  ...args: Parameters<typeof i18next.t>
): ReturnType<typeof i18next.t> {
  return t()(...args);
}

export { i18next };
