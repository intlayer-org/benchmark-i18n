import fs from "node:fs";
import path from "node:path";
import type { Page } from "@playwright/test";
import { DEFAULT_LOCALES, DEFAULT_PAGES } from "./pages-test";
import { benchmarkBloomRoot } from "./repo-root";

/**
 * Content consistency: every app of a framework must render the same text as
 * the framework's reference, in every locale.
 *
 * Catches what the size tests cannot see: catalogs with English left in the
 * French values, raw keys (`home.hero.title`), components that were never
 * translated, pages built from an older copy of the mock content, or a page
 * that rendered nothing. All of these silently shrink or grow bundles and
 * skew leakage fingerprints.
 *
 * References live in `test-utils/fixtures/content/<framework>/<locale>/<page>.txt`
 * (one normalized line per row). The English reference comes from the
 * framework's base app and must match line for line. Each library ships its
 * own translations, so other locales are not compared verbatim: they must not
 * render raw keys, must not repeat the English lines, and must carry about the
 * same amount of text as the reference (missing components / pages).
 * Regenerate a reference by running a trusted app with
 * `UPDATE_CONTENT_REFERENCE=1 bun run test:content`.
 */

const NAV_TIMEOUT_MS = 60_000;
/** Lines shorter than this (language names, "Blog", prices) are ignored. */
const MIN_LINE_LENGTH = 16;
/** Source locale: share of the reference's lines an app must render verbatim. */
const MIN_COVERAGE = 0.9;
/** Other locales: max share of rendered lines still identical to the source-locale reference. */
const MAX_UNTRANSLATED = 0.25;
/** Other locales: rendered text volume must stay within this ratio of the reference. */
const MAX_VOLUME_DRIFT = 0.3;
const SOURCE_LOCALE = "en";
/** Dotted identifiers such as `about.header.title` rendered instead of text. */
const RAW_KEY_RE = /\b[a-z][A-Za-z0-9-]*(?:\.[A-Za-z0-9_-]+){2,}\b/g;
const RAW_KEY_ALLOW = /\.(com|org|dev|io|js|ts|json)$/;

export type ContentConsistencyConfig = {
  /** Fixture directory name; defaults to the framework derived from the app name. */
  framework?: string;
  locales?: string[];
};

/** `nextjs-static-foo-app` → `nextjs`, `vite-vue-i18n-static` → `vite-vue`. */
export function frameworkOf(appName: string): string {
  if (appName.startsWith("nextjs-")) return "nextjs";
  if (appName.startsWith("tanstack-")) return "tanstack";
  const vite = appName.match(/^vite-(react|vue|svelte|solid)-/);
  if (vite) return `vite-${vite[1]}`;
  throw new Error(`content-consistency: unknown framework for ${appName}`);
}

const normalize = (line: string) =>
  line.replace(/\s+/g, " ").replace(/[’‘]/g, "'").trim();
/**
 * Footer credit ("i18n Benchmark — Open-source project. Built with …"): most i18n
 * apps still name TanStack Router even on Next.js. Known, identical across the
 * i18n apps of a framework, one line — ignored so it cannot fail small pages.
 * Bare email addresses are identical in every locale and ignored too.
 */
const IGNORED_LINE = /^(i18n Benchmark|Benchmark i18n) — |^\S+@\S+\.\w+$/;
/** Match key: compilers (lingo.dev, gt) may drop or add spaces around inline elements. */
const matchKey = (line: string) => line.replace(/\s+/g, "");

async function renderedLines(page: Page, url: string): Promise<string[]> {
  await page.goto(url, { waitUntil: "load", timeout: NAV_TIMEOUT_MS });
  // Dynamic-loading apps render their text after fetching the catalog.
  await page.waitForLoadState("networkidle").catch(() => {});
  await page
    .getByRole("heading", { level: 1 })
    .first()
    .waitFor({ state: "visible", timeout: NAV_TIMEOUT_MS })
    .catch(() => {});
  const text = await page.evaluate(() => document.body.innerText ?? "");
  const lines = text
    .split("\n")
    .map(normalize)
    .filter((l) => l.length >= MIN_LINE_LENGTH && !IGNORED_LINE.test(l));
  return [...new Set(lines)];
}

export function registerContentConsistencyTest(
  test: any,
  expect: any,
  appName: string,
  config: ContentConsistencyConfig = {},
): void {
  const framework = config.framework ?? frameworkOf(appName);
  const fixturesDir = path.join(
    benchmarkBloomRoot(process.cwd()),
    "test-utils/fixtures/content",
    framework,
  );
  const update = process.env.UPDATE_CONTENT_REFERENCE === "1";

  // Base apps have no i18n: their other-locale routes render the source text.
  const isBaseApp = appName.endsWith("base-app");
  const locales = config.locales ?? (isBaseApp ? [SOURCE_LOCALE] : DEFAULT_LOCALES);

  test.describe(`Content consistency - ${appName} vs ${framework} reference`, () => {
    for (const locale of locales) {
      for (const pageConfig of DEFAULT_PAGES) {
        test(`[${locale}] ${pageConfig.name}`, async ({ page }: { page: Page }) => {
          // Each locale runs in its own Playwright project; skip the others.
          const project = test.info().project.name;
          test.skip(
            DEFAULT_LOCALES.includes(project) && project !== locale,
            `covered by the ${locale} project`,
          );

          const url = `/${locale}${pageConfig.path === "/" ? "" : pageConfig.path}`;
          const lines = await renderedLines(page, url);
          const fixture = path.join(fixturesDir, locale, `${pageConfig.name}.txt`);

          if (update) {
            fs.mkdirSync(path.dirname(fixture), { recursive: true });
            fs.writeFileSync(fixture, `${lines.join("\n")}\n`);
            return;
          }

          const rawKeys = [
            ...new Set(
              lines.flatMap((l) => l.match(RAW_KEY_RE) ?? []).filter((k) => !RAW_KEY_ALLOW.test(k)),
            ),
          ];
          expect(rawKeys, `raw translation keys rendered on ${url}`).toEqual([]);

          expect(
            fs.existsSync(fixture),
            `missing reference ${path.relative(process.cwd(), fixture)} — run with UPDATE_CONTENT_REFERENCE=1 on the reference app`,
          ).toBe(true);
          const readLines = (file: string) =>
            fs
              .readFileSync(file, "utf8")
              .split("\n")
              .map(normalize)
              .filter((l) => l.length >= MIN_LINE_LENGTH && !IGNORED_LINE.test(l));
          const reference = readLines(fixture);

          if (locale === SOURCE_LOCALE) {
            const rendered = new Set(lines.map(matchKey));
            const missing = reference.filter((l) => !rendered.has(matchKey(l)));
            const coverage = reference.length ? 1 - missing.length / reference.length : 1;
            if (coverage < MIN_COVERAGE) {
              console.log(
                `[content] ${appName} ${url}: ${Math.round(coverage * 100)}% of reference lines; missing:\n  ${missing.slice(0, 15).join("\n  ")}`,
              );
            }
            expect(
              coverage,
              `${url} renders ${Math.round(coverage * 100)}% of the ${framework}/${locale} reference text`,
            ).toBeGreaterThanOrEqual(MIN_COVERAGE);
            return;
          }

          const sourceFixture = path.join(fixturesDir, SOURCE_LOCALE, `${pageConfig.name}.txt`);
          const sourceLines = new Set(
            (fs.existsSync(sourceFixture) ? readLines(sourceFixture) : []).map(matchKey),
          );
          const untranslated = lines.filter((l) => sourceLines.has(matchKey(l)));
          const untranslatedShare = lines.length ? untranslated.length / lines.length : 1;
          if (untranslatedShare > MAX_UNTRANSLATED) {
            console.log(
              `[content] ${appName} ${url}: ${Math.round(untranslatedShare * 100)}% of lines are still ${SOURCE_LOCALE}:\n  ${untranslated.slice(0, 15).join("\n  ")}`,
            );
          }
          expect(
            untranslatedShare,
            `${url}: ${Math.round(untranslatedShare * 100)}% of the rendered lines are untranslated ${SOURCE_LOCALE} text`,
          ).toBeLessThanOrEqual(MAX_UNTRANSLATED);

          const volume = (xs: string[]) => xs.reduce((n, l) => n + l.length, 0);
          const drift = volume(reference) ? volume(lines) / volume(reference) - 1 : 0;
          expect(
            Math.abs(drift),
            `${url} renders ${Math.round(drift * 100)}% more/less text than the ${framework}/${locale} reference`,
          ).toBeLessThanOrEqual(MAX_VOLUME_DRIFT);
        });
      }
    }
  });
}
