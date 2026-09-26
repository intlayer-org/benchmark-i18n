#!/usr/bin/env bun
/**
 * Decides which benchmark apps CI must re-run, so an app is only rebuilt and
 * re-measured when something that can change its numbers changed.
 *
 * `turbo --affected` is not used because any bun.lock change marks every
 * package as affected. Here each app's installed dependency tree is resolved
 * from bun.lock before and after, and only apps whose tree differs are kept.
 *
 * An app is affected when:
 *   - a file inside its directory changed
 *   - a shared input changed (test-utils, turbo.json, CI files)
 *   - bun.lock changed a package it installs, directly or transitively
 *
 * Changes that cannot move a number are ignored: docs (IGNORED_FILES), root
 * package.json scripts/workspaces/metadata (NON_BUILD_ROOT_FIELDS; dependency
 * fields are covered by the bun.lock check), and lock changes confined to
 * lint/type tooling (NON_BUILD_DEP). A lock change in the root workspace's own
 * tree re-runs every app, since apps resolve hoisted root packages.
 *
 * Usage:
 *   bun scripts/ci-plan.ts --base <sha> [--head <sha>]
 *   bun scripts/ci-plan.ts --all
 *   bun scripts/ci-plan.ts --apps nextjs-static-next-intlayer-app,tanstack-base-app
 *
 * Prints a JSON array of { name, path, base? }. `base` is the framework's
 * base app (no i18n), which CI measures in the same job as the app so timing
 * results can be reported relative to it. When GITHUB_OUTPUT is set, also
 * writes `apps` (that array) and `count`.
 */

import { appendFileSync, existsSync, readFileSync } from "fs";
import { execFileSync } from "child_process";

type LockEntry = [string, string?, Record<string, any>?, string?];
type Lockfile = {
  workspaces: Record<string, { name: string } & Record<string, any>>;
  packages: Record<string, LockEntry>;
};
type App = {
  name: string;
  path: string;
  base?: { name: string; path: string };
};

const SHARED_INPUTS = [
  "test-utils/",
  "turbo.json",
  "bunfig.toml",
  ".github/workflows/benchmark.yml",
  "scripts/ci-plan.ts",
];

// Files that are never read by a build or a test.
const IGNORED_FILES = /(\.md|(^|\/)LICENSE|(^|\/)\.gitignore)$/;

const DEP_FIELDS = [
  "dependencies",
  "devDependencies",
  "optionalDependencies",
  "peerDependencies",
];

// CI runs each app's own scripts, so root scripts and workspace globs cannot
// change a result; root dependencies are compared through bun.lock instead.
const NON_BUILD_ROOT_FIELDS = new Set([
  ...DEP_FIELDS,
  "scripts",
  "workspaces",
  "name",
  "version",
  "description",
  "author",
  "license",
  "main",
  "private",
  "keywords",
  "repository",
]);

// Lint, format and type-only tooling: never part of a build's output.
const NON_BUILD_DEP =
  /^(eslint|eslint-.*|@eslint\/.*|@next\/eslint-.*|typescript-eslint|@typescript-eslint\/.*|@types\/.*|@biomejs\/.*|prettier|prettier-.*|turbo)$/;

// Apps that cannot build without a secret the current run does not have.
const SECRET_GATED: Record<string, string> = {
  "nextjs-static-lingo.dev-app": "HAS_LINGO_KEY",
  "tanstack-static-lingo.dev-app": "HAS_LINGO_KEY",
};

const getArg = (flag: string) => {
  const index = process.argv.indexOf(flag);
  return index === -1 ? undefined : process.argv[index + 1];
};

const git = (...args: string[]) =>
  execFileSync("git", args, { encoding: "utf8", maxBuffer: 1024 ** 3 });

/** bun.lock is JSON with trailing commas. */
const parseLockfile = (text: string): Lockfile =>
  JSON.parse(text.replace(/,(\s*[}\]])/g, "$1"));

const depNames = (fields: Record<string, any> | undefined) =>
  DEP_FIELDS.flatMap((field) => Object.keys(fields?.[field] ?? {})).filter(
    (dep) => !NON_BUILD_DEP.test(dep),
  );

/** "@scope/a/b" → ["@scope/a", "b"] */
const splitKey = (key: string) => {
  const parts = key.split("/");
  const segments: string[] = [];
  for (let i = 0; i < parts.length; i++) {
    segments.push(
      parts[i].startsWith("@") ? `${parts[i]}/${parts[++i]}` : parts[i],
    );
  }
  return segments;
};

/**
 * Resolves `dep` required from the lock key path `from` the way bun nests
 * keys (`<parent>/<dep>`): the closest ancestor that has its own copy wins.
 */
const resolveKey = (lock: Lockfile, from: string[], dep: string) => {
  for (let i = from.length; i >= 0; i--) {
    const key = [...from.slice(0, i), dep].join("/");
    if (key in lock.packages) return key;
  }
};

const entryDeps = (lock: Lockfile, entry: LockEntry) => {
  const workspacePath = entry[0].split("@workspace:")[1];
  return depNames(
    workspacePath === undefined ? entry[2] : lock.workspaces[workspacePath],
  );
};

/**
 * Every dependency edge a workspace installs, as
 * "<parent name@version> > <dep> = <serialized resolved entry>". Parents are
 * named by package identity, not lock key, so a hoisting reshuffle caused by another
 * app (`zod` moving to `@tanstack/router-plugin/zod` at the same version) does
 * not count as a change.
 */
const resolvedEdges = (lock: Lockfile, path: string) => {
  const edges = new Set<string>();
  const workspace = lock.workspaces[path];
  if (!workspace) return edges;

  const visited = new Set<string>();
  const queue: [string[], string, string][] = depNames(workspace).map(
    (dep) => [[workspace.name], dep, workspace.name],
  );
  while (queue.length > 0) {
    const [from, dep, parent] = queue.pop()!;
    const key = resolveKey(lock, from, dep);
    if (!key) continue;
    const entry = lock.packages[key];
    edges.add(`${parent} > ${dep} = ${JSON.stringify(entry)}`);
    if (visited.has(key)) continue;
    visited.add(key);
    const segments = splitKey(key);
    for (const next of entryDeps(lock, entry)) {
      queue.push([segments, next, entry[0]]);
    }
  }
  return edges;
};

const sameEdges = (a: Set<string>, b: Set<string>) =>
  a.size === b.size && [...a].every((edge) => b.has(edge));

/** A workspace's declared dependencies, without lint/type tooling. */
const buildDeps = (workspace: Record<string, any> | undefined) =>
  JSON.stringify(
    DEP_FIELDS.map((field) =>
      Object.entries(workspace?.[field] ?? {}).filter(
        ([dep]) => !NON_BUILD_DEP.test(dep),
      ),
    ),
  );

const sameWorkspaceTree = (before: Lockfile, after: Lockfile, path: string) =>
  buildDeps(before.workspaces[path]) === buildDeps(after.workspaces[path]) &&
  sameEdges(resolvedEdges(before, path), resolvedEdges(after, path));

/** Root package.json fields that can change a build, e.g. overrides. */
const rootBuildFields = (text: string) =>
  JSON.stringify(
    Object.entries(JSON.parse(text))
      .filter(([field]) => !NON_BUILD_ROOT_FIELDS.has(field))
      .sort(([a], [b]) => a.localeCompare(b)),
  );

const showFile = (rev: string, file: string) => {
  try {
    return git("show", `${rev}:${file}`);
  } catch {
    return "{}";
  }
};

const head = getArg("--head");
// Read the lockfile at --head so past ranges can be planned from any checkout.
const lock = parseLockfile(
  head ? git("show", `${head}:bun.lock`) : readFileSync("bun.lock", "utf8"),
);
const apps: App[] = Object.entries(lock.workspaces)
  // Stale entries of a local lockfile can point at deleted apps.
  .filter(
    ([path]) =>
      path.startsWith("apps-benchmark/") && existsSync(`${path}/package.json`),
  )
  .map(([path, workspace]): App => ({ name: workspace.name, path }))
  .sort((a, b) => a.name.localeCompare(b.name));

/** apps-benchmark/nextjs-static/intlayer-app → apps-benchmark/nextjs-base-app */
const baseApps = apps.filter((app) => app.path.endsWith("-base-app"));
for (const app of apps) {
  if (baseApps.includes(app)) continue;
  const group = app.path.split("/")[1];
  const base = baseApps
    .filter((candidate) =>
      group.startsWith(
        `${candidate.path.split("/")[1].replace(/base-app$/, "")}`,
      ),
    )
    .sort((a, b) => b.path.length - a.path.length)[0];
  if (base) app.base = { name: base.name, path: base.path };
}

const selectAffected = (): { apps: App[]; reason: string } => {
  const appsArg = getArg("--apps");
  if (process.argv.includes("--all") || appsArg === "all") {
    return { apps, reason: "full run requested" };
  }
  if (appsArg) {
    const wanted = new Set(appsArg.split(",").map((name) => name.trim()));
    return {
      apps: apps.filter((app) => wanted.has(app.name)),
      reason: "apps selected manually",
    };
  }

  const base = getArg("--base");
  if (!base || /^0+$/.test(base)) {
    return { apps, reason: "no base commit to diff against" };
  }

  const changedFiles = git("diff", "--name-only", `${base}...${head ?? "HEAD"}`)
    .split("\n")
    .filter((file) => file && !IGNORED_FILES.test(file));
  const mergeBase = git("merge-base", base, head ?? "HEAD").trim();

  const sharedChange = changedFiles.find((file) =>
    SHARED_INPUTS.some((input) =>
      input.endsWith("/") ? file.startsWith(input) : file === input,
    ),
  );
  if (sharedChange) {
    return { apps, reason: `shared input changed: ${sharedChange}` };
  }

  if (
    changedFiles.includes("package.json") &&
    rootBuildFields(showFile(mergeBase, "package.json")) !==
      rootBuildFields(showFile(head ?? "HEAD", "package.json"))
  ) {
    return { apps, reason: "root package.json build fields changed" };
  }

  const affected = new Set<string>();
  for (const app of apps) {
    if (changedFiles.some((file) => file.startsWith(`${app.path}/`))) {
      affected.add(app.name);
    }
  }

  if (changedFiles.includes("bun.lock")) {
    const before = parseLockfile(git("show", `${mergeBase}:bun.lock`));
    if (!sameWorkspaceTree(before, lock, "")) {
      return { apps, reason: "root workspace dependencies changed in bun.lock" };
    }
    for (const app of apps) {
      if (!sameWorkspaceTree(before, lock, app.path)) affected.add(app.name);
    }
  }

  return {
    apps: apps.filter((app) => affected.has(app.name)),
    reason: `${changedFiles.length} changed files`,
  };
};

const { apps: selected, reason } = selectAffected();
const runnable = selected.filter((app) => {
  const gate = SECRET_GATED[app.name];
  if (!gate || process.env[gate] === "true" || !process.env.CI) return true;
  console.error(`::warning::Skipping ${app.name}: ${gate} is not set`);
  return false;
});

console.error(`${runnable.length}/${apps.length} apps to run (${reason})`);
console.log(JSON.stringify(runnable, null, 2));

if (process.env.GITHUB_OUTPUT) {
  appendFileSync(
    process.env.GITHUB_OUTPUT,
    `apps=${JSON.stringify(runnable)}\ncount=${runnable.length}\n`,
  );
}
