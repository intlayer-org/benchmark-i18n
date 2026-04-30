import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import solid from "vite-plugin-solid";
import { intlayer } from "vite-intlayer";

export default defineConfig({
  plugins: [intlayer(), tailwindcss(), solid()],
});
