/**
 * Maps paraglide-app/messages/{locale}.json onto Lingui flat message ids,
 * writes lingui-app/src/locales/{locale}/messages.json, runs `lingui compile`,
 * and mirrors compiled catalogs to messages.mjs (used by src/i18n/lingui.ts).
 */
import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";

const root = path.resolve(import.meta.dirname, "..");
const linguiLocalesDir = path.join(root, "src/locales");
const paraglideDir = path.join(
  root,
  "..",
  "paraglide-app",
  "messages",
);

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

type ParaglideRoot = Record<string, unknown>;

function lookup(paraglide: ParaglideRoot, messageId: string): string | undefined {
  if (!messageId.includes(".")) {
    const v = paraglide[messageId];
    return typeof v === "string" ? v : undefined;
  }
  const dot = messageId.indexOf(".");
  const ns = messageId.slice(0, dot);
  const key = messageId.slice(dot + 1);
  const group = paraglide[ns];
  if (group && typeof group === "object" && !Array.isArray(group)) {
    const v = (group as Record<string, unknown>)[key];
    return typeof v === "string" ? v : undefined;
  }
  return undefined;
}

function loadJson(p: string): ParaglideRoot {
  return JSON.parse(fs.readFileSync(p, "utf8")) as ParaglideRoot;
}

const linguiEnPath = path.join(linguiLocalesDir, "en", "messages.json");
const messageIds = Object.keys(loadJson(linguiEnPath)).sort();

const enParaglide = loadJson(path.join(paraglideDir, "en.json"));

for (const locale of LOCALES) {
  const paraglidePath = path.join(paraglideDir, `${locale}.json`);
  const paraglide = loadJson(paraglidePath);
  const out: Record<string, string> = {};

  for (const id of messageIds) {
    let value = lookup(paraglide, id);
    if (value === undefined) {
      value = lookup(enParaglide, id);
    }
    if (value === undefined) {
      value = id;
    }
    out[id] = value;
  }

  const outPath = path.join(linguiLocalesDir, locale, "messages.json");
  fs.writeFileSync(
    outPath,
    `${JSON.stringify(out, null, 2)}\n`,
    "utf8",
  );
}

console.log(
  `Wrote ${LOCALES.length} catalogs (${messageIds.length} ids each) from ${paraglideDir}`,
);

const compile = spawnSync("bunx", ["lingui", "compile"], {
  cwd: root,
  stdio: "inherit",
  shell: false,
});
if (compile.status !== 0) {
  process.exit(compile.status ?? 1);
}

const cjsPrefix = "/*eslint-disable*/module.exports={messages:";
const cjsSuffix = "};";

function messagesJsToEsm(js: string): string {
  if (!js.startsWith(cjsPrefix) || !js.endsWith(cjsSuffix)) {
    throw new Error("Unexpected messages.js format from lingui compile");
  }
  const parseCall = js.slice(cjsPrefix.length, -cjsSuffix.length);
  return `/*eslint-disable*/export const messages=${parseCall};`;
}

for (const locale of LOCALES) {
  const jsPath = path.join(linguiLocalesDir, locale, "messages.js");
  const mjsPath = path.join(linguiLocalesDir, locale, "messages.mjs");
  const js = fs.readFileSync(jsPath, "utf8");
  fs.writeFileSync(mjsPath, `${messagesJsToEsm(js)}\n`, "utf8");
}

console.log(`Synced ${LOCALES.length} messages.mjs files from compiled messages.js`);
