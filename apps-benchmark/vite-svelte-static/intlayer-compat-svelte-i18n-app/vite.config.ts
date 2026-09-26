import tailwindcss from "@tailwindcss/vite";
import { svelteI18nVitePlugin } from "@intlayer/svelte-i18n/plugin";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";

// Same app as `svelte-i18n-app`, but `svelteI18nVitePlugin` aliases every
// `svelte-i18n` import to `@intlayer/svelte-i18n`, so the components are
// untouched and the translations come from the intlayer dictionaries compiled
// from `src/locales/`.
export default defineConfig({
  plugins: [tailwindcss(), svelte(), svelteI18nVitePlugin()],
  resolve: {
    alias: {
      $lib: fileURLToPath(new URL("./src/lib", import.meta.url)),
    },
  },
});
