import { createRouter as createTanStackRouter } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'
import { initializeGT } from "gt-tanstack-start";
import gtConfig from "../gt.config.json";
import { loadTranslations } from "../loadTranslations";

// Initialize GT at the module level
initializeGT({
  ...gtConfig,
  loadTranslations,
});

export function getRouter() {
  const router = createTanStackRouter({
    routeTree,
    scrollRestoration: true,
    defaultPreload: 'intent',
    defaultPreloadStaleTime: 0,
  })

  return router
}

declare module '@tanstack/react-router' {
  interface Register {
    router: ReturnType<typeof getRouter>
  }
}
