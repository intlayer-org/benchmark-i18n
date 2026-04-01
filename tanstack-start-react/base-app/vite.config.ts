import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { visualizer } from "rollup-plugin-visualizer";

const config = defineConfig({
  plugins: [
    tailwindcss(),
    tanstackStart(),
    viteReact(),
    visualizer({
      filename: "../bundle/base-app.html",
      open: false,
      gzipSize: true,
      brotliSize: true,
    }),
  ],
});

export default config;
