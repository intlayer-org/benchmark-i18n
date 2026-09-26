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
 *   - a shared input changed (test-utils, root package.json, turbo.json, CI files)
 *   - bun.lock changed a package it installs, directly or transitively
 *
 * Usage:
 *   bun scripts/ci-plan.ts --base <sha> [--head <sha>]
 *   bun scripts/ci-plan.ts --all
 *   bun scripts/ci-plan.ts --apps nextjs-static-next-intlayer-app,tanstack-base-app
 *
 * Prints a JSON array of { name, path }. When GITHUB_OUTPUT is set, also
 * writes `apps` (that array) and `count`.
 */

import { appendFileSync, existsSync, readFileSync } from 'fs';
import { execFileSync } from 'child_process';

type LockEntry = [string, string?, Record<string, any>?, string?];
type Lockfile = {
  workspaces: Record<string, { name: string } & Record<string, any>>;
  packages: Record<string, LockEntry>;
};
type App = { name: string; path: string };

const SHARED_INPUTS = [
  'test-utils/',
  'package.json',
  'turbo.json',
  'bunfig.toml',
  '.github/workflows/benchmark.yml',
  'scripts/ci-plan.ts',
];

const DEP_FIELDS = [
  'dependencies',
  'devDependencies',
  'optionalDependencies',
  'peerDependencies',
];

// Apps that cannot build without a secret the current run does not have.
const SECRET_GATED: Record<string, string> = {
  'nextjs-static-lingo.dev-app': 'HAS_LINGO_KEY',
  'tanstack-static-lingo.dev-app': 'HAS_LINGO_KEY',
};

const getArg = (flag: string) => {
  const index = process.argv.indexOf(flag);
  return index === -1 ? undefined : process.argv[index + 1];
};

const git = (...args: string[]) =>
  execFileSync('git', args, { encoding: 'utf8', maxBuffer: 1024 ** 3 });

/** bun.lock is JSON with trailing commas. */
const parseLockfile = (text: string): Lockfile =>
  JSON.parse(text.replace(/,(\s*[}\]])/g, '$1'));

const depNames = (fields: Record<string, any> | undefined) =>
  DEP_FIELDS.flatMap((field) => Object.keys(fields?.[field] ?? {}));

/** "@scope/a/b" → ["@scope/a", "b"] */
const splitKey = (key: string) => {
  const parts = key.split('/');
  const segments: string[] = [];
  for (let i = 0; i < parts.length; i++) {
    segments.push(
      parts[i].startsWith('@') ? `${parts[i]}/${parts[++i]}` : parts[i]
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
    const key = [...from.slice(0, i), dep].join('/');
    if (key in lock.packages) return key;
  }
};

const entryDeps = (lock: Lockfile, entry: LockEntry) => {
  const workspacePath = entry[0].split('@workspace:')[1];
  return depNames(
    workspacePath === undefined ? entry[2] : lock.workspaces[workspacePath]
  );
};

/** Every lock entry a workspace installs, as key → serialized entry. */
const resolvedEntries = (lock: Lockfile, path: string) => {
  const entries = new Map<string, string>();
  const workspace = lock.workspaces[path];
  if (!workspace) return entries;

  const queue: [string[], string][] = depNames(workspace).map((dep) => [
    [workspace.name],
    dep,
  ]);
  while (queue.length > 0) {
    const [from, dep] = queue.pop()!;
    const key = resolveKey(lock, from, dep);
    if (!key || entries.has(key)) continue;
    const entry = lock.packages[key];
    entries.set(key, JSON.stringify(entry));
    const segments = splitKey(key);
    for (const next of entryDeps(lock, entry)) queue.push([segments, next]);
  }
  return entries;
};

const sameEntries = (a: Map<string, string>, b: Map<string, string>) =>
  a.size === b.size && [...a].every(([key, value]) => b.get(key) === value);

const head = getArg('--head');
// Read the lockfile at --head so past ranges can be planned from any checkout.
const lock = parseLockfile(
  head ? git('show', `${head}:bun.lock`) : readFileSync('bun.lock', 'utf8')
);
const apps: App[] = Object.entries(lock.workspaces)
  // Stale entries of a local lockfile can point at deleted apps.
  .filter(
    ([path]) =>
      path.startsWith('apps-benchmark/') && existsSync(`${path}/package.json`)
  )
  .map(([path, workspace]) => ({ name: workspace.name, path }))
  .sort((a, b) => a.name.localeCompare(b.name));

const selectAffected = (): { apps: App[]; reason: string } => {
  const appsArg = getArg('--apps');
  if (process.argv.includes('--all') || appsArg === 'all') {
    return { apps, reason: 'full run requested' };
  }
  if (appsArg) {
    const wanted = new Set(appsArg.split(',').map((name) => name.trim()));
    return {
      apps: apps.filter((app) => wanted.has(app.name)),
      reason: 'apps selected manually',
    };
  }

  const base = getArg('--base');
  if (!base || /^0+$/.test(base)) {
    return { apps, reason: 'no base commit to diff against' };
  }

  const changedFiles = git('diff', '--name-only', `${base}...${head ?? 'HEAD'}`)
    .split('\n')
    .filter(Boolean);

  const sharedChange = changedFiles.find((file) =>
    SHARED_INPUTS.some((input) =>
      input.endsWith('/') ? file.startsWith(input) : file === input
    )
  );
  if (sharedChange) {
    return { apps, reason: `shared input changed: ${sharedChange}` };
  }

  const affected = new Set<string>();
  for (const app of apps) {
    if (changedFiles.some((file) => file.startsWith(`${app.path}/`))) {
      affected.add(app.name);
    }
  }

  if (changedFiles.includes('bun.lock')) {
    const mergeBase = git('merge-base', base, head ?? 'HEAD').trim();
    const before = parseLockfile(git('show', `${mergeBase}:bun.lock`));
    for (const app of apps) {
      const workspaceChanged =
        JSON.stringify(before.workspaces[app.path]) !==
        JSON.stringify(lock.workspaces[app.path]);
      if (
        workspaceChanged ||
        !sameEntries(
          resolvedEntries(before, app.path),
          resolvedEntries(lock, app.path)
        )
      ) {
        affected.add(app.name);
      }
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
  if (!gate || process.env[gate] === 'true' || !process.env.CI) return true;
  console.error(`::warning::Skipping ${app.name}: ${gate} is not set`);
  return false;
});

console.error(`${runnable.length}/${apps.length} apps to run (${reason})`);
console.log(JSON.stringify(runnable, null, 2));

if (process.env.GITHUB_OUTPUT) {
  appendFileSync(
    process.env.GITHUB_OUTPUT,
    `apps=${JSON.stringify(runnable)}\ncount=${runnable.length}\n`
  );
}
