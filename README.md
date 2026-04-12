# Benchmark Bloom

A comprehensive performance benchmarking suite for i18n libraries in React applications, specifically focusing on TanStack Start (React Router) static exports.

## Benchmarks Included

The suite measures several key performance indicators across different i18n implementations:

1.  **Bundle Size & Content Leakage**: Measures the JavaScript, CSS, and HTML payload per page. It also detects "leakage"—where translations for unused locales or code for other pages are included in the bundle.
2.  **Locale Switch Reactivity**: Measures how fast the UI updates when switching languages, both from an end-to-end perspective and internal React render time.
3.  **Individual Component Sizes**: Compiles every component in isolation to measure the overhead added by the i18n library to pure component logic.

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
- **Whushale** (`dynamic-whushale-app`)

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

Benchmark results are saved as JSON files in the `results/` directory, organized by category and application:

- `results/<benchmark-category>/<app-name>/pages.json`
- `results/<benchmark-category>/<app-name>/reactivity-<locale>.json`
- `results/<benchmark-category>/<app-name>/components-size.json`

## Project Structure

- `tanstack-start-react-static/`: Contains the various application implementations.
- `test-utils/`: Shared benchmarking logic used by all applications.
- `results/`: Output directory for benchmark data.
