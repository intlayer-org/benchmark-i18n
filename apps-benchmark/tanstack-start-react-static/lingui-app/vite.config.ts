import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { visualizer } from "rollup-plugin-visualizer";
import packageJson from "./package.json" with { type: "json" };
import { lingui } from "@lingui/vite-plugin";

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
    tanstackStart(),
    viteReact(),
    lingui(),

    visualizer({
      filename: `../../../results/${packageJson.name}/bundle/stats.json`, // Change extension to .json
      template: "raw-data", // This instructs the plugin to output the data structure instead of HTML
      gzipSize: true,
      brotliSize: true,
    }),
    visualizer({
      filename: `../../../results/${packageJson.name}/bundle/rollup-visualizer.html`,
      open: false,
      gzipSize: true,
      brotliSize: true,
    }),
    // visualizer({
    //   filename: `../../../results/${packageJson.name}/bundle/stats-i18n.json`, // Change extension to .json
    //   template: "raw-data", // This instructs the plugin to output the data structure instead of HTML
    //   gzipSize: true,
    //   brotliSize: true,
    // }),
    // visualizer({
    //   filename: `../../../results/${packageJson.name}/bundle/rollup-visualizer-i18n.html`,
    //   include: [
    //     { file: "**/node_modules/i18next/**" },
    //     { file: "**/node_modules/react-i18next/**" },
    //     { file: "**/node_modules/next-intl/**" },
    //   ],
    //   exclude: [
    //     { file: "**/node_modules/react/**" },
    //     { file: "**/node_modules/react-dom/**" },
    //   ],
    // }),
  ],
});

export default config;
