import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const appRoot = path.join(__dirname, "..");
const localesDir = path.join(appRoot, "locales");

function flattenObject(obj, prefix = "") {
  return Object.keys(obj).reduce((acc, k) => {
    const pre = prefix.length ? `${prefix}_` : "";
    const val = obj[k];
    if (typeof val === "object" && val !== null && !Array.isArray(val)) {
      Object.assign(acc, flattenObject(val, pre + k));
    } else {
      acc[pre + k] = val;
    }
    return acc;
  }, {});
}

/** Locale JSON under locales/ — flattened flat maps for Paraglide. */
const locales = ["en", "fr", "es", "de", "it", "pt", "zh", "ja", "ko", "ru"];

const schema = {
  $schema: "https://inlang.com/schema/inlang-message-format",
};

for (const locale of locales) {
  const filePath = path.join(localesDir, `${locale}.json`);
  const raw = fs.readFileSync(filePath, "utf8");
  const stripped = JSON.parse(raw);
  delete stripped.$schema;
  const flattened = flattenObject(stripped);

  const withSchema = { ...schema, ...flattened };
  fs.writeFileSync(filePath, `${JSON.stringify(withSchema, null, 2)}\n`, "utf8");

  console.log(`flattened locales/${locale}.json`);
}
