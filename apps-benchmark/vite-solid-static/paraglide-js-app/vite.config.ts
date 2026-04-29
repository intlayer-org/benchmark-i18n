import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import solid from "vite-plugin-solid";
import { paraglide } from "@inlang/paraglide-vite";

export default defineConfig({
  plugins: [
    tailwindcss(),
    solid(),
  ],
});
