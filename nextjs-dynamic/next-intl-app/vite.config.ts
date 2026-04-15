import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

/**
 * Minimal Vite config used exclusively by scripts/measure-components.ts.
 * It provides the React JSX transform so Vite can compile .tsx files in
 * library mode without the full Next.js build pipeline.
 */
export default defineConfig({
  plugins: [react()],
});
