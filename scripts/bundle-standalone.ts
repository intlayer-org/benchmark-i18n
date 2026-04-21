#!/usr/bin/env bun
/**
 * Patches rollup-visualizer.html in a bundle directory to be fully self-contained.
 *
 * The Next.js bundle analyzer outputs a server-rendered app that fetches its data
 * from /data/*.data and /data/routes.json via fetch(). This fails when the file is
 * opened from file:// (CORS blocks cross-origin fetch from null origin).
 *
 * This script injects a fetch interceptor before the app loads that serves all
 * data files inline as base64, making the HTML openable directly from disk.
 *
 * Usage:
 *   bun scripts/bundle-standalone.ts <bundle-dir>
 *   bun scripts/bundle-standalone.ts results/nextjs-dynamic-next-intlayer-app/bundle
 */

import { readFileSync, writeFileSync, readdirSync, statSync } from "fs";
import { join, relative } from "path";

const bundleDir = process.argv[2];
if (!bundleDir) {
  console.error("Usage: bun scripts/bundle-standalone.ts <bundle-dir>");
  process.exit(1);
}

const htmlPath = join(bundleDir, "rollup-visualizer.html");
if (!Bun.file(htmlPath).size) {
  console.error(`Not found: ${htmlPath}`);
  process.exit(1);
}

// Collect all files under data/ recursively
function collectDataFiles(dir: string): { urlPath: string; b64: string }[] {
  const results: { urlPath: string; b64: string }[] = [];
  const entries = readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...collectDataFiles(fullPath));
    } else {
      const urlPath = "/" + relative(bundleDir, fullPath);
      const b64 = Buffer.from(readFileSync(fullPath)).toString("base64");
      results.push({ urlPath, b64 });
    }
  }
  return results;
}

const dataDir = join(bundleDir, "data");
const dataFiles = collectDataFiles(dataDir);
console.log(`Inlining ${dataFiles.length} data files...`);

// Build the fetch-interceptor script
const entries = dataFiles
  .map(({ urlPath, b64 }) => `  ${JSON.stringify(urlPath)}: ${JSON.stringify(b64)}`)
  .join(",\n");

const interceptor = `<script>
(function() {
  var _data = {
${entries}
  };
  var _origFetch = window.fetch.bind(window);
  window.fetch = function(input, init) {
    var url = typeof input === "string" ? input : input instanceof Request ? input.url : String(input);
    // Normalise to a path relative to origin (strip scheme+host for http, keep as-is for file://)
    var path = url;
    try { path = new URL(url, location.href).pathname; } catch(e) {}
    if (Object.prototype.hasOwnProperty.call(_data, path)) {
      var b64 = _data[path];
      var binary = atob(b64);
      var bytes = new Uint8Array(binary.length);
      for (var i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
      var blob = new Blob([bytes]);
      return Promise.resolve(new Response(blob, { status: 200 }));
    }
    return _origFetch(input, init);
  };
})();
</script>`;

// Inject the interceptor immediately before the first <script> tag so it runs
// before any app code that might call fetch()
let html = readFileSync(htmlPath, "utf8");
const firstScript = html.indexOf("<script");
if (firstScript === -1) {
  console.error("No <script> tag found in HTML");
  process.exit(1);
}
html = html.slice(0, firstScript) + interceptor + "\n" + html.slice(firstScript);

writeFileSync(htmlPath, html);
console.log(`Done. Open ${htmlPath} directly in a browser.`);
