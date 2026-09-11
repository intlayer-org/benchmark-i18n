import { defineConfig } from "vite";
import { intlayer } from "vite-intlayer";

/**
 * Minimal Vite config used exclusively by scripts/measure-components.ts and
 * scripts/measure-lib-size.ts — mirrors nextjs-static/next-intlayer-app's.
 *
 * Without it those measurements run with no intlayer plugin at all, so none of
 * the build-time env vars derived from intlayer.config.ts are defined. The
 * editor and analytics runtimes are guarded by `INTLAYER_EDITOR_ENABLED` and
 * `INTLAYER_ANALYTICS_ENABLED`, so an undefined flag left roughly 57 KB of
 * `@intlayer/editor` + `@intlayer/analytics` inside the reported overhead for
 * `@intlayer/next-i18next` — code the real Next build, which does run the plugin, never
 * ships. The TanStack compat apps already had a Vite config, which is why their
 * numbers never carried that weight.
 */
export default defineConfig({
  plugins: [
    // Redirect react-dom/client to the profiling build so React's Profiler
    // component fires its onRender callback in production. The standard
    // production bundle strips profiling instrumentation; react-dom/profiling
    // is the production build that keeps it.
    {
      name: "react-dom-profiling",
      enforce: "pre",
      resolveId(id) {
        if (id === "react-dom/client") {
          return this.resolve("react-dom/profiling");
        }
      },
    },
    intlayer(),
  ],
});
