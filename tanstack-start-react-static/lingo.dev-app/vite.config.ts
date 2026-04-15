import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { visualizer } from "rollup-plugin-visualizer";
import packageJson from "./package.json" with { type: "json" };
import { lingoCompilerPlugin } from "@lingo.dev/compiler/vite";

const config = defineConfig({
  plugins: [
    lingoCompilerPlugin({
      sourceRoot: "src",
      sourceLocale: "en",
      targetLocales: ["es", "fr", "de", "it", "pt", "zh", "ja", "ko", "ru"],
    }),
    tailwindcss(),
    tanstackStart(),
    viteReact(),

    visualizer({
      filename: `../../results/${packageJson.name}/bundle/stats.json`, // Change extension to .json
      template: "raw-data", // This instructs the plugin to output the data structure instead of HTML
      gzipSize: true,
      brotliSize: true,
    }),
    visualizer({
      filename: `../../results/${packageJson.name}/bundle/rollup-visualizer.html`,
      open: false,
      gzipSize: true,
      brotliSize: true,
    }),
    // visualizer({
    //   filename: `../../results/${packageJson.name}/bundle/stats-i18n.json`, // Change extension to .json
    //   template: "raw-data", // This instructs the plugin to output the data structure instead of HTML
    //   gzipSize: true,
    //   brotliSize: true,
    // }),
    // visualizer({
    //   filename: `../../results/${packageJson.name}/bundle/rollup-visualizer-i18n.html`,
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
