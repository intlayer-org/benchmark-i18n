import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from "@tailwindcss/vite";
import { visualizer } from "rollup-plugin-visualizer";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
    visualizer({
      filename: `../../results/vite-vue-base-app/bundle/stats.json`,
      template: "raw-data",
      gzipSize: true,
      brotliSize: true,
    }),
    visualizer({
      filename: `../../results/vite-vue-base-app/bundle/rollup-visualizer.html`,
      open: false,
      gzipSize: true,
      brotliSize: true,
    }),
  ],
})
