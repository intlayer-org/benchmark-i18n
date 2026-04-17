import { defineConfig } from "vite";
import { intlayer } from "vite-intlayer";

/**
 * Minimal Vite config used exclusively by scripts/measure-components.ts.
 * It provides the React JSX transform so Vite can compile .tsx files in
 * library mode without the full Next.js build pipeline.
 */
export default defineConfig({
  plugins: [
    // Redirect react-dom/client to the profiling build so React's Profiler
    // component fires its onRender callback in production. The standard
    // production bundle strips profiling instrumentation; react-dom/profiling
    // is the production build that keeps it. SSR (react-dom/server) is
    // unaffected because only the client environment imports react-dom/client.
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
