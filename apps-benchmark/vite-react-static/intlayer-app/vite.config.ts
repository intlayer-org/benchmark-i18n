import { defineConfig } from "vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { intlayer } from "vite-intlayer";
import { visualizer } from "rollup-plugin-visualizer";
import packageJson from "./package.json" with { type: "json" };

const config = defineConfig({
  plugins: [
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
    intlayer(),

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
