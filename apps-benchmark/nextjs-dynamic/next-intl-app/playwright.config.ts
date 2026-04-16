import { defineConfig, devices } from "@playwright/test";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { nextStandaloneServerEntry } from "test-utils/repo-root";

const appDir = path.dirname(fileURLToPath(import.meta.url));

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
    baseURL: process.env.BASE_URL || "http://localhost:4173",
    trace: "on-first-retry",
  },

  webServer: {
    cwd: appDir,
    command: `PORT=4173 node ${nextStandaloneServerEntry(appDir)}`,
    url: "http://localhost:4173",
    reuseExistingServer: !process.env.CI,
    timeout: 120 * 1000,
  },

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
