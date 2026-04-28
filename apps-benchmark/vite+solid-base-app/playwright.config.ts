import { defineConfig, devices } from "@playwright/test";

const SOLID_PREVIEW_PORT = 5183;
const REACT_REFERENCE_PORT = 5184;
const solidOrigin = `http://localhost:${SOLID_PREVIEW_PORT}`;
const reactReferenceOrigin = `http://localhost:${REACT_REFERENCE_PORT}`;

/**
 * See https://playwright.dev/docs/test-configuration.
 * Ports 5183/5184 avoid clashing with other local previews on 4173 (reuseExistingServer).
 */
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
    baseURL: process.env.BASE_URL || solidOrigin,
    trace: "on-first-retry",
  },

  webServer: [
    {
      command: `bun x --bun vite preview --port ${SOLID_PREVIEW_PORT}`,
      url: solidOrigin,
      reuseExistingServer: !process.env.CI,
      timeout: 120 * 1000,
    },
    {
      command: `cd ../vite+react-base-app && bun x --bun vite build && bun x --bun vite preview --port ${REACT_REFERENCE_PORT}`,
      url: reactReferenceOrigin,
      reuseExistingServer: !process.env.CI,
      timeout: 300 * 1000,
    },
  ],

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
