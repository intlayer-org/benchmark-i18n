#!/usr/bin/env bun

/**
 * Rebuild and rerun tests for Intlayer benchmark apps.
 *
 * Discovers all Intlayer apps in the monorepo (both native and compat apps
 * across Next.js, TanStack Start, Vite Vue, Vite Svelte, Vite Solid, and Vite React),
 * rebuilds them sequentially, and runs benchmark test suites.
 *
 * Usage:
 *   bun scripts/rebuild-and-test-intlayer.ts [options]
 *   bun run rebuild-and-test:intlayer -- [options]
 *
 * Examples:
 *   # Rebuild and run all tests for all Intlayer apps:
 *   bun scripts/rebuild-and-test-intlayer.ts
 *
 *   # Fast run: size-only tests (skip timing tests: reactivity, rendering):
 *   bun scripts/rebuild-and-test-intlayer.ts --size-only
 *
 *   # Run for a specific framework only (e.g. Next.js or Vue):
 *   bun scripts/rebuild-and-test-intlayer.ts --framework nextjs
 *   bun scripts/rebuild-and-test-intlayer.ts --framework vue
 *
 *   # Run for a single app:
 *   bun scripts/rebuild-and-test-intlayer.ts --app nextjs-static-next-intlayer-app
 *
 *   # Rebuild only, or test only:
 *   bun scripts/rebuild-and-test-intlayer.ts --skip-test
 *   bun scripts/rebuild-and-test-intlayer.ts --skip-build
 *
 *   # Clean build artifacts before running:
 *   bun scripts/rebuild-and-test-intlayer.ts --clean
 *
 *   # Display updated summary report table after tests finish:
 *   bun scripts/rebuild-and-test-intlayer.ts --report
 */

import { spawnSync } from 'node:child_process';
import { existsSync, readdirSync, readFileSync, rmSync } from 'node:fs';
import { join, resolve } from 'node:path';

// ---------------------------------------------------------------------------
// Types & Constants
// ---------------------------------------------------------------------------

export type IntlayerApp = {
  name: string;
  path: string;
  framework: 'nextjs' | 'tanstack' | 'vue' | 'svelte' | 'solid' | 'react';
  category: 'static' | 'dynamic' | 'scoped-static' | 'scoped-dynamic';
  isCompat: boolean;
  scripts: Record<string, string>;
};

const REPO_ROOT = resolve(import.meta.dir, '..');
const APPS_DIR = join(REPO_ROOT, 'apps-benchmark');

const DEFAULT_TEST_TASKS = [
  'pages',
  'components',
  'lib-size',
  'rendering',
  'reactivity',
];

const SIZE_TEST_TASKS = ['pages', 'components', 'lib-size'];
const TIMING_TEST_TASKS = ['rendering', 'reactivity'];

// ---------------------------------------------------------------------------
// CLI Argument Parsing
// ---------------------------------------------------------------------------

const args = process.argv.slice(2);

if (args.includes('--help') || args.includes('-h')) {
  printHelp();
  process.exit(0);
}

function getArg(flag: string, shortFlag?: string): string | null {
  let idx = args.indexOf(flag);
  if (idx === -1 && shortFlag) idx = args.indexOf(shortFlag);
  return idx !== -1 && idx + 1 < args.length ? args[idx + 1] : null;
}

function hasFlag(flag: string, shortFlag?: string): boolean {
  return args.includes(flag) || (shortFlag ? args.includes(shortFlag) : false);
}

const filterApp = getArg('--app', '-a')?.toLowerCase() ?? null;
const filterFramework = getArg('--framework', '-f')?.toLowerCase() ?? null;
const filterCategory = getArg('--category', '-c')?.toLowerCase() ?? null;
const compatOnly = hasFlag('--compat-only');
const nativeOnly = hasFlag('--native-only');

const sizeOnly = hasFlag('--size-only') || hasFlag('--quick');
const timingOnly = hasFlag('--timing-only');
const includeContent = hasFlag('--content');
const includeConsistency = hasFlag('--consistency');

const customTasksArg = getArg('--tasks', '-t');
const skipBuild = hasFlag('--skip-build');
const skipTest = hasFlag('--skip-test');
const cleanBeforeBuild = hasFlag('--clean');
const allowCache = hasFlag('--cached');
const isolatedMode = hasFlag('--isolated') || hasFlag('--per-app');
const bailOnError = hasFlag('--bail');
const generateReport = hasFlag('--report');
const isDryRun = hasFlag('--dry-run');

// ---------------------------------------------------------------------------
// App Discovery
// ---------------------------------------------------------------------------

function discoverIntlayerApps(): IntlayerApp[] {
  const apps: IntlayerApp[] = [];

  function scanDir(dir: string, depth = 0) {
    if (depth > 4) return;
    if (!existsSync(dir)) return;

    const entries = readdirSync(dir, { withFileTypes: true });
    const hasPackageJson = entries.some(
      (e) => e.isFile() && e.name === 'package.json'
    );

    if (
      hasPackageJson &&
      !dir.includes('node_modules') &&
      !dir.includes('.next')
    ) {
      const pkgPath = join(dir, 'package.json');
      try {
        const pkg = JSON.parse(readFileSync(pkgPath, 'utf-8'));
        const relPath = join('apps-benchmark', dir.slice(APPS_DIR.length + 1));
        const contentStr = JSON.stringify(pkg);

        const isIntlayer =
          pkg.name?.toLowerCase().includes('intlayer') ||
          relPath.toLowerCase().includes('intlayer') ||
          contentStr.includes('"intlayer"') ||
          contentStr.includes('"@intlayer/') ||
          contentStr.includes('"next-intlayer"') ||
          contentStr.includes('"vue-intlayer"') ||
          contentStr.includes('"solid-intlayer"') ||
          contentStr.includes('"svelte-intlayer"') ||
          contentStr.includes('"react-intlayer"');

        if (isIntlayer && pkg.name) {
          apps.push({
            name: pkg.name,
            path: relPath,
            framework: inferFramework(relPath),
            category: inferCategory(relPath),
            isCompat: pkg.name.includes('compat') || relPath.includes('compat'),
            scripts: pkg.scripts || {},
          });
          return; // Stop descending once app package root is found
        }
      } catch {
        // Ignore unparseable package.json
      }
    }

    for (const e of entries) {
      if (
        e.isDirectory() &&
        e.name !== 'node_modules' &&
        e.name !== '.next' &&
        e.name !== 'dist' &&
        e.name !== 'build' &&
        !e.name.startsWith('.')
      ) {
        scanDir(join(dir, e.name), depth + 1);
      }
    }
  }

  scanDir(APPS_DIR);
  return apps.sort((a, b) => a.name.localeCompare(b.name));
}

function inferFramework(path: string): IntlayerApp['framework'] {
  if (path.includes('nextjs-')) return 'nextjs';
  if (path.includes('tanstack-')) return 'tanstack';
  if (path.includes('vite-vue-')) return 'vue';
  if (path.includes('vite-svelte-')) return 'svelte';
  if (path.includes('vite-solid-')) return 'solid';
  if (path.includes('vite-react-')) return 'react';
  return 'nextjs';
}

function inferCategory(path: string): IntlayerApp['category'] {
  if (path.includes('scoped-dynamic')) return 'scoped-dynamic';
  if (path.includes('scoped-static')) return 'scoped-static';
  if (path.includes('dynamic')) return 'dynamic';
  return 'static';
}

// ---------------------------------------------------------------------------
// Filtering & Task Resolution
// ---------------------------------------------------------------------------

function filterApps(allApps: IntlayerApp[]): IntlayerApp[] {
  return allApps.filter((app) => {
    if (filterApp) {
      const matchName = app.name.toLowerCase().includes(filterApp);
      const matchPath = app.path.toLowerCase().includes(filterApp);
      if (!matchName && !matchPath) return false;
    }

    if (filterFramework) {
      const fw = filterFramework.replace(/^vite-/, '');
      const appFw = app.framework.replace(/^vite-/, '');
      if (appFw !== fw) return false;
    }

    if (filterCategory && app.category !== filterCategory) {
      return false;
    }

    if (compatOnly && !app.isCompat) return false;
    if (nativeOnly && app.isCompat) return false;

    return true;
  });
}

function resolveTestTasks(): string[] {
  let tasks: string[];

  if (customTasksArg) {
    tasks = customTasksArg
      .split(',')
      .map((t) => t.trim().replace(/^test:/, ''))
      .filter(Boolean);
  } else if (sizeOnly) {
    tasks = [...SIZE_TEST_TASKS];
  } else if (timingOnly) {
    tasks = [...TIMING_TEST_TASKS];
  } else {
    tasks = [...DEFAULT_TEST_TASKS];
  }

  if (includeContent && !tasks.includes('content')) {
    tasks.push('content');
  }
  if (includeConsistency && !tasks.includes('consistency')) {
    tasks.push('consistency');
  }

  return tasks;
}

// ---------------------------------------------------------------------------
// Execution Helpers
// ---------------------------------------------------------------------------

function cleanApp(app: IntlayerApp) {
  const dirs = ['.next', 'dist', 'out', 'build', '.turbo'];
  const fullAppDir = join(REPO_ROOT, app.path);
  for (const d of dirs) {
    const target = join(fullAppDir, d);
    if (existsSync(target)) {
      try {
        rmSync(target, { recursive: true, force: true });
      } catch (err) {
        console.warn(`[WARN] Failed to clean ${target}:`, err);
      }
    }
  }
}

function runCommand(command: string, args: string[], cwd = REPO_ROOT): number {
  console.log(`\n\x1b[36m$ ${command} ${args.join(' ')}\x1b[0m`);
  const result = spawnSync(command, args, {
    cwd,
    stdio: 'inherit',
    env: process.env,
  });
  return result.status ?? 1;
}

// ---------------------------------------------------------------------------
// Help Text
// ---------------------------------------------------------------------------

function printHelp() {
  console.log(`
\x1b[1mRebuild and Rerun Tests for Intlayer Apps\x1b[0m

\x1b[33mUsage:\x1b[0m
  bun scripts/rebuild-and-test-intlayer.ts [options]
  bun run rebuild-and-test:intlayer -- [options]

\x1b[33mFilter Options:\x1b[0m
  -a, --app <name>          Filter by app name or path substring (e.g. "nextjs", "vue", "compat")
  -f, --framework <name>    Filter by framework: nextjs | tanstack | vue | svelte | solid | react
  -c, --category <name>     Filter by category: static | dynamic | scoped-static | scoped-dynamic
      --compat-only         Target only Intlayer compatibility packages (intlayer-compat-*)
      --native-only         Target only native Intlayer packages (exclude compat apps)

\x1b[33mExecution & Step Options:\x1b[0m
      --skip-build          Skip rebuilding apps, run only the test suite
      --skip-test           Rebuild apps only, skip running tests
      --clean               Clean previous build artifacts (.next, dist, .turbo) before build
      --cached              Allow Turbo cache hits (default is to force fresh rebuilds/tests)
      --isolated            Run sequentially app-by-app in isolated processes instead of Turbo
      --bail                Stop immediately on the first build or test failure (default: continue)
      --report              Generate summary benchmark report when finished (bun run report --lib intlayer)
      --dry-run             Display matching apps and commands without executing

\x1b[33mTest Task Selection:\x1b[0m
  -t, --tasks <list>        Comma-separated test tasks (e.g. pages,components,lib-size)
      --size-only, --quick  Run only bundle/component/lib size tests (skip timing tests)
      --timing-only         Run only timing-sensitive tests (reactivity, rendering)
      --content             Include test:content in test suite
      --consistency         Include test:consistency in test suite

\x1b[33mExamples:\x1b[0m
  # Rebuild and run all tests across all Intlayer apps
  bun scripts/rebuild-and-test-intlayer.ts

  # Fast size-only test run (rebuild + size tests, skipping timing tests)
  bun scripts/rebuild-and-test-intlayer.ts --size-only

  # Rebuild and test Next.js Intlayer apps and output summary report
  bun scripts/rebuild-and-test-intlayer.ts -f nextjs --report

  # Rebuild only Vue Intlayer apps with clean build cache
  bun scripts/rebuild-and-test-intlayer.ts -f vue --clean --skip-test
`);
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main() {
  const startTime = Date.now();
  console.log(
    '\n\x1b[1;35m🌸 Benchmark Bloom — Intlayer Rebuild & Test Runner\x1b[0m'
  );

  const allIntlayerApps = discoverIntlayerApps();
  const selectedApps = filterApps(allIntlayerApps);
  const testTasks = resolveTestTasks();

  if (selectedApps.length === 0) {
    console.error(
      '\x1b[31m[ERROR] No Intlayer apps matched the specified filters.\x1b[0m'
    );
    process.exit(1);
  }

  console.log(
    `\nFound \x1b[1m${selectedApps.length}\x1b[0m of \x1b[1m${allIntlayerApps.length}\x1b[0m Intlayer apps:`
  );
  for (const app of selectedApps) {
    const compatBadge = app.isCompat ? ' \x1b[33m(compat)\x1b[0m' : '';
    console.log(
      `  • \x1b[32m${app.name}\x1b[0m [${app.framework} / ${app.category}]${compatBadge}`
    );
  }

  console.log('\n\x1b[1mConfiguration:\x1b[0m');
  console.log(
    `  • Rebuild:   ${skipBuild ? '\x1b[33mSkipped\x1b[0m' : '\x1b[32mEnabled\x1b[0m'}`
  );
  console.log(
    `  • Tests:     ${
      skipTest
        ? '\x1b[33mSkipped\x1b[0m'
        : `\x1b[32mEnabled\x1b[0m (${testTasks.map((t) => `test:${t}`).join(', ')})`
    }`
  );
  console.log(
    `  • Clean:     ${cleanBeforeBuild ? '\x1b[32mYes\x1b[0m' : 'No'}`
  );
  console.log(
    `  • Turbo cache: ${allowCache ? 'Allowed' : '\x1b[33mForced fresh (--force)\x1b[0m'}`
  );
  console.log(
    `  • Execution: ${isolatedMode ? 'App-by-app (isolated)' : 'Turbo Pipeline'}`
  );
  console.log(
    `  • Failure mode: ${bailOnError ? 'Bail on error' : 'Continue on error'}`
  );

  if (isDryRun) {
    console.log(
      '\n\x1b[33m[DRY RUN] Execution preview complete. No commands were run.\x1b[0m\n'
    );
    process.exit(0);
  }

  // 1. Clean build directories if requested
  if (cleanBeforeBuild) {
    console.log('\n\x1b[1mCleaning build artifacts...\x1b[0m');
    for (const app of selectedApps) {
      cleanApp(app);
    }
    console.log('✓ Cleaned build artifacts.');
  }

  let hasFailure = false;

  // 2. Execution Mode: Turbo Pipeline (Default)
  if (!isolatedMode) {
    const filterFlags = selectedApps.flatMap((app) => ['--filter', app.name]);
    const forceFlag = allowCache ? [] : ['--force'];
    const continueFlag = bailOnError ? [] : ['--continue'];

    // Step A: Build
    if (!skipBuild) {
      console.log(
        '\n\x1b[1;34m━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\x1b[0m'
      );
      console.log(
        `\x1b[1;34m▶ Building ${selectedApps.length} Intlayer Apps\x1b[0m`
      );
      console.log(
        '\x1b[1;34m━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\x1b[0m'
      );

      const buildArgs = [
        'turbo',
        'run',
        'build',
        ...filterFlags,
        '--concurrency=1',
        ...forceFlag,
        ...continueFlag,
      ];

      const buildStatus = runCommand('bunx', buildArgs);
      if (buildStatus !== 0) {
        hasFailure = true;
        console.error('\x1b[31m[ERROR] One or more app builds failed.\x1b[0m');
        if (bailOnError) {
          process.exit(buildStatus);
        }
      }
    }

    // Step B: Tests
    if (!skipTest) {
      console.log(
        '\n\x1b[1;34m━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\x1b[0m'
      );
      console.log(
        `\x1b[1;34m▶ Running Tests on ${selectedApps.length} Intlayer Apps (${testTasks
          .map((t) => `test:${t}`)
          .join(' ')})\x1b[0m`
      );
      console.log(
        '\x1b[1;34m━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\x1b[0m'
      );

      const testTaskArgs = testTasks.map((t) => `test:${t}`);
      const testArgs = [
        'turbo',
        'run',
        ...testTaskArgs,
        ...filterFlags,
        '--concurrency=1',
        ...forceFlag,
        ...continueFlag,
      ];

      const testStatus = runCommand('bunx', testArgs);
      if (testStatus !== 0) {
        hasFailure = true;
        console.error('\x1b[31m[ERROR] One or more tests failed.\x1b[0m');
        if (bailOnError) {
          process.exit(testStatus);
        }
      }
    }
  } else {
    // 3. Execution Mode: Isolated Sequential per App
    console.log(
      '\n\x1b[1;34m━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\x1b[0m'
    );
    console.log(
      `\x1b[1;34m▶ Running Isolated Sequential Mode across ${selectedApps.length} Apps\x1b[0m`
    );
    console.log(
      '\x1b[1;34m━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\x1b[0m'
    );

    for (let i = 0; i < selectedApps.length; i++) {
      const app = selectedApps[i];
      const appDir = join(REPO_ROOT, app.path);
      console.log(
        `\n\x1b[1;35m[${i + 1}/${selectedApps.length}] Processing ${app.name} (${app.path})\x1b[0m`
      );

      // Build
      if (!skipBuild) {
        console.log(`\x1b[34m→ Building ${app.name}...\x1b[0m`);
        const bStatus = runCommand('bun', ['run', 'build'], appDir);
        if (bStatus !== 0) {
          hasFailure = true;
          console.error(`\x1b[31m✗ Build failed for ${app.name}\x1b[0m`);
          if (bailOnError) process.exit(bStatus);
        }
      }

      // Test tasks
      if (!skipTest) {
        for (const task of testTasks) {
          const scriptName = `test:${task}`;
          if (!app.scripts[scriptName] && !app.scripts.test) {
            console.log(
              `  \x1b[33m⊘ Skipping ${scriptName} (not defined in package.json)\x1b[0m`
            );
            continue;
          }
          console.log(
            `\x1b[34m→ Running ${scriptName} on ${app.name}...\x1b[0m`
          );
          const tStatus = runCommand('bun', ['run', scriptName], appDir);
          if (tStatus !== 0) {
            hasFailure = true;
            console.error(
              `\x1b[31m✗ ${scriptName} failed for ${app.name}\x1b[0m`
            );
            if (bailOnError) process.exit(tStatus);
          }
        }
      }
    }
  }

  // 4. Report generation if requested
  if (generateReport) {
    console.log(
      '\n\x1b[1;34m━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\x1b[0m'
    );
    console.log(
      '\x1b[1;34m▶ Generating Intlayer Results Summary Report\x1b[0m'
    );
    console.log(
      '\x1b[1;34m━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\x1b[0m'
    );
    runCommand('bun', ['report/scripts/summarize.ts', '--lib', 'intlayer']);
  }

  const durationSec = Math.round((Date.now() - startTime) / 1000);
  console.log(
    '\n\x1b[1;35m━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\x1b[0m'
  );
  if (hasFailure) {
    console.log(
      `\x1b[1;31m✖ Completed with failures in ${durationSec}s for ${selectedApps.length} apps.\x1b[0m`
    );
  } else {
    console.log(
      `\x1b[1;32m✔ Successfully completed in ${durationSec}s for all ${selectedApps.length} apps!\x1b[0m`
    );
  }
  console.log(
    '\x1b[1;35m━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\x1b[0m\n'
  );

  process.exit(hasFailure ? 1 : 0);
}

main().catch((err) => {
  console.error('\x1b[31m[FATAL ERROR]\x1b[0m', err);
  process.exit(1);
});
