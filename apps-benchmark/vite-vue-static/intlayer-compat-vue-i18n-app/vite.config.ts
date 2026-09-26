import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";
import { visualizer } from "rollup-plugin-visualizer";
import { vueI18nVitePlugin } from "@intlayer/vue-i18n/plugin";

// Same app as `vue-i18n-app`, but `vueI18nVitePlugin` aliases every `vue-i18n`
// import to `@intlayer/vue-i18n`, so the components are untouched and the
// translations come from the intlayer dictionaries compiled from `locales/`.
export default defineConfig({
  plugins: [
    vueI18nVitePlugin(),
    vue(),
    tailwindcss(),
    visualizer({
      filename: `../../../results/vite-vue-intlayer-compat-vue-i18n-static/bundle/stats.json`,
      template: "raw-data",
      gzipSize: true,
      brotliSize: true,
    }),
    visualizer({
      filename: `../../../results/vite-vue-intlayer-compat-vue-i18n-static/bundle/rollup-visualizer.html`,
      open: false,
      gzipSize: true,
      brotliSize: true,
    }),
  ],
});
