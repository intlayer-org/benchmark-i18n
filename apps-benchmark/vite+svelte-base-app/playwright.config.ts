import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig, devices } from "@playwright/test";

const __dirname = dirname(fileURLToPath(import.meta.url));
const viteReactRefRoot = join(__dirname, "../vite+react-base-app");

const structureMode = process.env.PLAYWRIGHT_STRUCTURE === "1";

if (structureMode) {
  if (!process.env.STRUCTURE_REFERENCE_BASE_URL) {
    process.env.STRUCTURE_REFERENCE_BASE_URL = "http://127.0.0.1:4174";
  }
}

const sveltePreview = {
  command: "bunx --bun vite preview --port 4173 --strictPort",
  url: "http://127.0.0.1:4173",
  reuseExistingServer: !process.env.CI,
  timeout: 120 * 1000,
};

const reactRefPreview = {
  command: "bunx --bun vite preview --port 4174 --strictPort",
  cwd: viteReactRefRoot,
  url: "http://127.0.0.1:4174",
  reuseExistingServer: !process.env.CI,
  timeout: 120 * 1000,
};

export default defineConfig({
  testDir: ".",
  testMatch: "*.test.ts",
  timeout: 10 * 60 * 1000,
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: 1,
  reporter: "list",
  use: {
    baseURL: process.env.BASE_URL || "http://127.0.0.1:4173",
    trace: "on-first-retry",
  },

  webServer: structureMode ? [sveltePreview, reactRefPreview] : sveltePreview,

  projects: [
    {
      name: "en",
      use: {
        ...devices["Desktop Chrome"],
        launchOptions: {
          args: [
            "--disable-dev-shm-usage",
            "--disable-gpu",
            '--js-flags="--max-old-space-size=1024"',
          ],
        },
      },
    },
    {
      name: "fr",
      use: {
        ...devices["Desktop Chrome"],
        launchOptions: {
          args: [
            "--disable-dev-shm-usage",
            "--disable-gpu",
            '--js-flags="--max-old-space-size=1024"',
          ],
        },
      },
    },
  ],
});
