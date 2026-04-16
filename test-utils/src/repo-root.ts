import path from "node:path";

/** benchmark-bloom root (contains turbo.json). */
export function benchmarkBloomRoot(fromAppDir: string): string {
  const dir = path.resolve(fromAppDir);
  return path.basename(dir) === "nextjs-base-app"
    ? path.join(dir, "../..")
    : path.join(dir, "../../..");
}

/**
 * Path to `server.js` for `node …`, relative to the Next app package directory.
 * Run with `webServer.cwd` set to that app directory so `.next/static` resolves.
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
