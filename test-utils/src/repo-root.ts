import fs from "node:fs";
import path from "node:path";

/**
 * benchmark-bloom repository root (directory containing `turbo.json`).
 *
 * Walks upward from `fromDir` so it works for apps at any depth under
 * `apps-benchmark/` (e.g. `nextjs-base-app` vs `nextjs-static/tolgee-app`).
 */
export function benchmarkBloomRoot(fromDir: string): string {
  let dir = path.resolve(fromDir);
  for (;;) {
    if (fs.existsSync(path.join(dir, "turbo.json"))) {
      return dir;
    }
    const parent = path.dirname(dir);
    if (parent === dir) {
      throw new Error(
        `benchmarkBloomRoot: could not find turbo.json above ${path.resolve(fromDir)}`,
      );
    }
    dir = parent;
  }
}

/**
 * Path to `server.js` for `node …`, relative to the Next app package directory.
 * Run with `webServer.cwd` set to that app directory.
 *
 * The standalone server `chdir`s into the traced app folder under
 * `.next/standalone/<repo-relative-path>/`; that folder must contain `.next/static`
 * (copy from the package `.next/static` after build — see
 * `test-utils/scripts/prepare-next-standalone.mjs`).
 */
export function nextStandaloneServerEntry(fromAppDir: string): string {
  const repoRoot = benchmarkBloomRoot(fromAppDir);
  return path
    .join(
      ".next/standalone",
      path.relative(repoRoot, path.resolve(fromAppDir)),
      "server.js",
    )
    .replace(/\\/g, "/");
}
