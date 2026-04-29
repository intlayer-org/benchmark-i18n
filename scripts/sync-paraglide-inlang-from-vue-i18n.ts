/**
 * Flattens nested vue-i18n JSON (same shape as vite-vue-intlayer)
 * into Paraglide inlang `{locale}.json` files (underscore keys).
 *
 * Usage: bun scripts/sync-paraglide-inlang-from-vue-i18n.ts
 */
import * as fs from "node:fs";
import * as path from "node:path";

const PARAGLIDE_SCHEMA =
  "https://inlang.com/schema/inlang-message-format" as const;

const SOURCES_LOCALE_DIR = path.join(
  path.dirname(import.meta.dir),
  "apps-benchmark/vite-vue-i18n-static/src/locales",
);

const TARGETS = [
  path.join(
    path.dirname(import.meta.dir),
    "apps-benchmark/vite-svelte-paraglide-js-static/project.inlang",
  ),
  path.join(
    path.dirname(import.meta.dir),
    "apps-benchmark/vite-solid-paraglide-js-static/project.inlang",
  ),
];

const LOCALES = [
  "en",
  "fr",
  "es",
  "de",
  "it",
  "pt",
  "zh",
  "ja",
  "ko",
  "ru",
] as const;

function flattenLeaves(
  obj: unknown,
  prefix = "",
  out: Record<string, string> = {},
): Record<string, string> {
  if (obj === null || typeof obj === "undefined") return out;
  if (typeof obj === "string") {
    if (!prefix)
      throw new Error("unexpected root string in locale JSON");
    out[prefix] = obj;
    return out;
  }
  if (Array.isArray(obj)) return out;
  if (typeof obj !== "object") return out;

  for (const [k, v] of Object.entries(obj)) {
    const next = prefix ? `${prefix}_${k}` : k;
    if (typeof v === "string") {
      out[next] = v;
    } else if (v !== null && typeof v === "object" && !Array.isArray(v)) {
      flattenLeaves(v, next, out);
    }
  }
  return out;
}

function main(): void {
  for (const locale of LOCALES) {
    const fp = path.join(SOURCES_LOCALE_DIR, `${locale}.json`);
    const raw = JSON.parse(fs.readFileSync(fp, "utf8"));
    const flat = flattenLeaves(raw);
    const doc = {
      $schema: PARAGLIDE_SCHEMA,
      ...flat,
    };
    const json = `${JSON.stringify(doc, null, 2)}\n`;
    for (const dir of TARGETS) {
      fs.mkdirSync(dir, { recursive: true });
      fs.writeFileSync(path.join(dir, `${locale}.json`), json);
    }
  }
  console.log(
    `Wrote Paraglide inlang locales for ${LOCALES.join(", ")} (${TARGETS.length} dirs)`,
  );
}

main();
