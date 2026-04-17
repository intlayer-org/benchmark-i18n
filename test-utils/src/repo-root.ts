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
