import fs from "node:fs";
import path from "node:path";

const locales = ["en", "de", "fr", "es", "ja", "zh", "ko", "it", "pt"];
const sourceDir = "/Users/aymericpineau/Documents/benchmark-bloom/tanstack-start-react/paraglide-app/messages/";
const targetDir = "src/messages/";

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

function flatten(data) {
  let result = {};
  function recurse(cur, prop) {
    if (Object(cur) !== cur) {
      result[prop] = cur;
    } else if (Array.isArray(cur)) {
      // Handle arrays if any, but in our case they shouldn't be there
      cur.forEach((v, i) => recurse(v, prop + "." + i));
    } else {
      for (let p in cur) {
        if (p === "$schema") continue; // Exclude schema
        recurse(cur[p], prop ? prop + "." + p : p);
      }
    }
  }
  recurse(data, "");
  return result;
}

for (const locale of locales) {
  const sourcePath = path.join(sourceDir, `${locale}.json`);
  if (fs.existsSync(sourcePath)) {
    const data = JSON.parse(fs.readFileSync(sourcePath, "utf-8"));
    const flatData = flatten(data);
    fs.writeFileSync(
      path.join(targetDir, `${locale}.json`),
      JSON.stringify(flatData, null, 2)
    );
    console.log(`Converted ${locale}.json`);
  } else {
    console.warn(`Source ${locale}.json not found!`);
  }
}
