import { defineConfig, devices } from "@playwright/test";

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
    command: "node_modules/.bin/next start -p 4173",
    // No root `/` route (only `/[locale]/...`); probe a real page so startup resolves.
    url: "http://localhost:4173/en",
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
