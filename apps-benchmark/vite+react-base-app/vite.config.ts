import { defineConfig } from "vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { visualizer } from "rollup-plugin-visualizer";
import packageJson from "./package.json" with { type: "json" };

const config = defineConfig({
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

    tailwindcss(),
    viteReact(),

    visualizer({
      filename: `../../results/${packageJson.name}/bundle/stats.json`,
      template: "raw-data",
      gzipSize: true,
      brotliSize: true,
    }),
    visualizer({
      filename: `../../results/${packageJson.name}/bundle/rollup-visualizer.html`,
      open: false,
      gzipSize: true,
      brotliSize: true,
    }),
  ],
});

export default config;
