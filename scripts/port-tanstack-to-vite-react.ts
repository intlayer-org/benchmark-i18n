/**
 * Scaffolds a Vite+React benchmark app from a TanStack Start app of the same
 * library. Page components are identical between the two frameworks; only the
 * router-bound shell (Header, Footer, LocaleSwitcher, routes) differs, so this
 * copies the Vite+React base app, overlays the TanStack app's i18n files and
 * rewrites `@tanstack/react-router` links to `react-router-dom`.
 *
 * The provider wiring (`src/components/Layout.tsx`) and the Vite plugins are
 * library-specific and must be edited by hand afterwards.
 *
 *   bun scripts/port-tanstack-to-vite-react.ts \
 *     apps-benchmark/tanstack-start-react-static/react-intl-app \
 *     apps-benchmark/vite-react-static/react-intl-app \
 *     vite-react-react-intl-static
 */
import {
  cpSync,
  existsSync,
  readdirSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from "node:fs";
import { join, relative } from "node:path";

const [from, to, pkgName] = process.argv.slice(2);
if (!from || !to || !pkgName) {
  console.error(
    "usage: port-tanstack-to-vite-react.ts <tanstack-app> <dest> <package-name>"
  );
  process.exit(1);
}
const category = to.split("/").at(-2)!; // e.g. vite-react-static
const base = "apps-benchmark/vite-react-base-app";
const SKIP = new Set([
  "node_modules",
  "dist",
  "test-results",
  ".turbo",
  ".tanstack",
  ".intlayer",
  "README.md",
]);

if (existsSync(to)) rmSync(to, { recursive: true });
cpSync(base, to, {
  recursive: true,
  filter: (p) => !SKIP.has(p.split("/").at(-1)!),
});

// Library files from the TanStack app: everything under src/ except the
// TanStack router shell, plus root-level library configs.
// The library's own i18n/ replaces the base one (its config may be .tsx).
if (existsSync(join(from, "src/i18n")))
  rmSync(join(to, "src/i18n"), { recursive: true });
const SRC_SKIP =
  /^(routes|routeTree\.gen\.ts|router\.tsx|entry-client\.tsx|entry-server\.tsx|styles\.css)$/;
for (const entry of readdirSync(join(from, "src"))) {
  if (SRC_SKIP.test(entry)) continue;
  cpSync(join(from, "src", entry), join(to, "src", entry), { recursive: true });
}
const ROOT_KEEP =
  /^(lingui\.config\.ts|project\.inlang|messages|locales|\.babelrc|babel\.config\.\w+|wuchale\.config\.\w+|lib-size\.test\.ts|global\.d\.ts)$/;
for (const entry of readdirSync(from)) {
  if (ROOT_KEEP.test(entry))
    cpSync(join(from, entry), join(to, entry), { recursive: true });
}
cpSync(join(from, "scripts"), join(to, "scripts"), { recursive: true });

// Header / Footer / LocaleSwitcher: react-router-dom links.
const LOCALE_PARAMS =
  /const params = useParams\(\{ strict: false \}\);\s*const currentLocale = params\.locale \?\? "en";/;
function toReactRouter(code: string): string {
  let out = code
    .replace(
      /import \{([^}]*)\} from "@tanstack\/react-router";/,
      (_, names: string) => {
        const kept = names
          .split(",")
          .map((s) => s.trim())
          .filter(Boolean);
        if (code.includes("activeProps")) kept.push("NavLink");
        return `import { ${kept.join(", ")} } from "react-router-dom";`;
      }
    )
    .replace(
      LOCALE_PARAMS,
      'const { locale: currentLocale = "en" } = useParams();'
    )
    .replace(/="\/\$locale((?:\/[a-z-]+)?)"/g, "={`/${currentLocale}$1`}")
    .replace(
      /"\/\$locale((?:\/[a-z-]+)?)"(?: as const)?/g,
      "`/${currentLocale}$1`"
    )
    .replace(/\s*preload=\{false\}/g, "")
    .replace(/\s*params=\{\{ locale: currentLocale \}( as any)?\}/g, "")
    .replace(/to=\{linkEl\.to as any\}/g, "to={linkEl.to as string}");
  // Links with active styling become NavLinks.
  out = out.replace(
    /<Link((?:(?!<\/Link>)[\s\S])*?)activeProps=\{\{ className: "is-active" \}\}((?:(?!<\/Link>)[\s\S])*?)className="nav-link"([\s\S]*?)<\/Link>/g,
    (_m, a: string, b: string, c: string) => {
      const exact = /activeOptions=\{\{ exact: true \}\}/.test(a + b);
      const attrs = (a + b).replace(
        /\s*activeOptions=\{\{ exact: true \}\}/,
        ""
      );
      return `<NavLink${attrs}${exact ? "\n              end" : ""}\n              className={({ isActive }) =>\n                \`nav-link\${isActive ? " is-active" : ""}\`\n              }${c}</NavLink>`;
    }
  );
  return out.replace(/\n[ \t]*(?=\n)/g, "");
}
for (const file of ["Header.tsx", "Footer.tsx"]) {
  const code = readFileSync(join(from, "src/components", file), "utf8");
  writeFileSync(join(to, "src/components", file), toReactRouter(code));
}
// LocaleSwitcher: keep the library's locale list / names, navigate by path.
const switcher = readFileSync(
  join(from, "src/components/LocaleSwitcher.tsx"),
  "utf8"
)
  .replace(
    'import { useNavigate, useParams } from "@tanstack/react-router";',
    'import { useLocation, useNavigate, useParams } from "react-router-dom";'
  )
  .replace(
    /const params = useParams\(\{ strict: false \}\);\s*const locale = params\.locale \?\? "en";\s*const navigate = useNavigate\(\);/,
    'const { locale = "en" } = useParams();\n  const navigate = useNavigate();\n  const location = useLocation();'
  )
  .replace(
    /navigate\(\{[^}]*?params: \(prev(?:: any)?\) => \(\{ \.\.\.prev, locale: newLocale \}\),?\s*\}\);/,
    "navigate(\n      location.pathname.replace(/^\\/[^/]+/, `/${newLocale}`) +\n        location.search +\n        location.hash,\n    );"
  );
if (switcher.includes("@tanstack"))
  throw new Error("LocaleSwitcher: unhandled TanStack usage");
writeFileSync(join(to, "src/components/LocaleSwitcher.tsx"), switcher);

// Test wrappers and scripts: category and results path depth.
const fromCategory = from.split("/").at(-2)!;
for (const file of [
  ...readdirSync(to).filter((f) => f.endsWith(".ts")),
  ...readdirSync(join(to, "scripts")).map((f) => `scripts/${f}`),
]) {
  const path = join(to, file);
  const code = readFileSync(path, "utf8");
  const next = code
    .replaceAll(fromCategory, category)
    .replaceAll("tanstack-start-react-static", category)
    .replaceAll("`../../results/", "`../../../results/");
  if (next !== code) writeFileSync(path, next);
}

// package.json: base deps + the TanStack app's non-TanStack deps.
const basePkg = JSON.parse(readFileSync(join(base, "package.json"), "utf8"));
const libPkg = JSON.parse(readFileSync(join(from, "package.json"), "utf8"));
const isRouterDep = (d: string) => d.startsWith("@tanstack/");
const merge = (
  a: Record<string, string> = {},
  b: Record<string, string> = {}
) =>
  Object.fromEntries(
    Object.entries({ ...a, ...b })
      .filter(([d]) => !isRouterDep(d))
      .sort(([x], [y]) => x.localeCompare(y))
  );
const pkg = {
  ...basePkg,
  name: pkgName,
  scripts: { ...basePkg.scripts, ...libPkg.scripts },
  dependencies: merge(basePkg.dependencies, libPkg.dependencies),
  devDependencies: merge(basePkg.devDependencies, libPkg.devDependencies),
};
for (const s of ["build", "dev", "preview"])
  pkg.scripts[s] = basePkg.scripts[s];
writeFileSync(join(to, "package.json"), `${JSON.stringify(pkg, null, 2)}\n`);

console.log(
  `scaffolded ${relative(".", to)} (${category}); now edit src/components/Layout.tsx and vite.config.ts`
);
