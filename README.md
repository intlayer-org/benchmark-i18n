# Benchmark Bloom

A comprehensive performance benchmarking suite for i18n libraries in React applications, covering Next.js and TanStack Start across multiple loading strategies.

## Benchmarks Included

The suite measures several key performance indicators across different i18n implementations:

1.  **Library size in the bundle**: The JS overhead added by the i18n library itself, measured via an empty component with just the i18n import.
2.  **Bundle Size & Content Leakage**: Measures the JavaScript, CSS, and HTML payload per page (min / average / max). It also detects "leakage"—where translations for unused locales or code for other pages are included in the bundle, expressed as a percentage of the JS bundle.
3.  **Locale Switch Reactivity**: Measures how fast the UI updates when switching languages — both the end-to-end perceived time and the internal React Profiler render time.
4.  **Individual Component Sizes**: Compiles every component in isolation (min / average / max) to measure how much code is reachable when React renders a component, including any i18n runtime that isn't tree-shaken.

## Test Categories

Each library is benchmarked in several configurations reflecting real-world usage patterns:

| Category | Description |
|----------|-------------|
| **base** | No i18n library — pure performance baseline |
| **static** | All translations bundled in a single file; no code splitting or lazy loading. Simple, but ships all locales and all pages to every user. Common in AI-generated code. |
| **dynamic** | Translations loaded dynamically at runtime; no route-level namespacing. Eliminates unused locales but still bundles all pages together. |
| **scoped-static** | Route-scoped namespaces; each page includes only its own translations, bundled upfront. Reduces page leakage without dynamic loading complexity. |
| **scoped-dynamic** | Namespace scoping + dynamic loading. The gold standard: each page downloads only its own locale's translations on demand. Maximally efficient, but significantly more complex to implement — which is why libraries like [Intlayer](https://intlayer.org) exist to automate this pattern. |

See [`report/README.md`](./report/README.md) for a full explanation of each category, all metrics, and how to interpret results.

## Report & Data Summary

The `report/` folder contains:

- **[`report/README.md`](./report/README.md)** — Full benchmark documentation: metric definitions, test category explanations, result file schemas, and guidance on interpreting data.
- **[`report/RESULTS.md`](./report/RESULTS.md)** — Latest benchmark findings with per-dimension analysis, coverage status, and key takeaways.
- **`report/scripts/summarize.ts`** — A script that reads all result JSON files and prints a human-readable summary table.

```bash
# Print a full summary of all available results
bun run report

# Filter by framework
bun run report -- --framework nextjs

# Filter by test category
bun run report -- --category scoped-dynamic

# Filter by library name (partial match)
bun run report -- --lib intlayer

# Output raw JSON for further processing
bun run report -- --json
```

---

## Supported Libraries

Currently, the following implementations are benchmarked:

### Static Benchmarks (`tanstack-start-react-static`)

- **Base App** (`static-base-app`)
- **Intlayer** (`static-intlayer-app`)
- **Lingui** (`static-lingui-app`)
- **Paraglide** (`static-paraglide-app`)
- **react-i18next** (`static-react-i18next-app`)
- **react-intl** (`static-react-intl-app`)
- **use-intl** (`static-use-intl-app`)
- **GT** (`static-gt-react-app`)
- **Lingo.dev** (`static-lingo.dev-app`)

### Dynamic Benchmarks (`tanstack-start-react-dynamic`)

- **Intlayer** (`dynamic-intlayer-app`)
- **Lingui** (`dynamic-lingui-app`)
- **react-i18next** (`dynamic-react-i18next-app`)
- **react-intl** (`dynamic-react-intl-app`)
- **use-intl** (`dynamic-use-intl-app`)
- **GT** (`dynamic-gt-react-app`)
- **Tolgee** (`dynamic-tolgee-app`)
- **wuchale** (`dynamic-wuchale-app`)

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/) (latest version)
- Node.js (for some underlying tools)

### Installation

1.  Clone the repository:

    ```bash
    git clone https://github.com/intlayer-org/benchmark-bloom.git
    cd benchmark-bloom
    ```

2.  Install dependencies:

    ```bash
    bun install
    ```

3.  Install Playwright browsers:
    ```bash
    bun x playwright install chromium
    ```

### Running the Benchmarks

To run the full suite across all applications:

1.  **Build the applications**:

    ```bash
    bun run build
    ```

2.  **Execute the tests**:
    ```bash
    bun run test
    ```

### Specific Benchmark Commands

You can also run specific parts of the benchmark:

- **Run bundle size & leakage tests only**:

  ```bash
  bun run test:pages
  ```

- **Run reactivity benchmarks only**:

  ```bash
  bun run test:reactivity
  ```

- **Run component size measurements only**:
  ```bash
  bun run test:components
  ```

## Viewing Results

Benchmark results are saved as JSON files under `apps-benchmark/results/`, organized by category and application:

- `apps-benchmark/results/<benchmark-category>/<app-name>/pages-bundle-<locale>.json`
- `apps-benchmark/results/<benchmark-category>/<app-name>/reactivity-<locale>.json`
- `apps-benchmark/results/<benchmark-category>/<app-name>/components-size.json`
- `apps-benchmark/results/<benchmark-category>/<app-name>/empty-component-size.json`

Use the summary script to read all results at once:

```bash
bun run report
```

See [`report/README.md`](./report/README.md) for the full schema documentation of each result file.

## Project Structure

- `apps-benchmark/`: All benchmark applications, organized by framework and test category.
- `apps-benchmark/results/`: Output directory for benchmark data (generated after running tests).
- `test-utils/`: Shared benchmarking logic (Playwright tests, component measurement).
- `report/`: Benchmark documentation and data summary scripts.
