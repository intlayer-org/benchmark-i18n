import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";
import { visualizer } from "rollup-plugin-visualizer";
import { intlayer } from "vite-intlayer";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    intlayer(),
    vue(),
    tailwindcss(),
    visualizer({
      filename: `../../results/vite-vue-intlayer-static/bundle/stats.json`,
      template: "raw-data",
      gzipSize: true,
      brotliSize: true,
    }),
    visualizer({
      filename: `../../results/vite-vue-intlayer-static/bundle/rollup-visualizer.html`,
      open: false,
      gzipSize: true,
      brotliSize: true,
    }),
  ],
});
