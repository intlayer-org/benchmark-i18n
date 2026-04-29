import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";
import { visualizer } from "rollup-plugin-visualizer";
import path from "node:path";
import { ExternalFluentPlugin as FluentVuePlugin } from "unplugin-fluent-vue/vite";

export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
    FluentVuePlugin({
      locales: ["en", "fr"],
      getFtlPath: (locale, _vuePath) =>
        path.resolve(__dirname, `./locales/${locale}.ftl`),
    }),
    visualizer({
      filename: `../../results/vite-vue-fluent-vue-static/bundle/stats.json`,
      template: "raw-data",
      gzipSize: true,
      brotliSize: true,
    }),
    visualizer({
      filename: `../../results/vite-vue-fluent-vue-static/bundle/rollup-visualizer.html`,
      open: false,
      gzipSize: true,
      brotliSize: true,
    }),
  ],
});
