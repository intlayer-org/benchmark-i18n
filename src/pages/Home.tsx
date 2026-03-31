const Home = () => (
  <div className="container py-16">
    <section className="mb-16 text-center">
      <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground">
        i18n Benchmark
      </h1>
      <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
        A test application designed to measure the real-world impact of internationalization
        libraries on bundle size, loading performance, and rendering reactivity.
      </p>
      <div className="mt-8 flex justify-center gap-4">
        <button className="rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity">
          View Results
        </button>
        <button className="rounded-lg border border-border px-6 py-3 text-sm font-medium text-foreground hover:bg-accent transition-colors">
          Methodology
        </button>
      </div>
    </section>

    {/* Why it matters */}
    <section className="mb-16">
      <h2 className="mb-6 text-2xl font-bold text-foreground">Why These Metrics Matter</h2>
      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-lg border border-border bg-card p-6">
          <h3 className="mb-2 text-lg font-semibold text-foreground">Bundle Size</h3>
          <p className="text-sm text-muted-foreground">
            The bundle is the data shipped to every user across the globe. A larger bundle means
            longer download times — especially on slow 3G connections common in many regions.
            i18n libraries vary dramatically in their weight: from a few kilobytes to tens of
            kilobytes of runtime code, plus the translation files themselves.
          </p>
        </div>
        <div className="rounded-lg border border-border bg-card p-6">
          <h3 className="mb-2 text-lg font-semibold text-foreground">Rendering & Hydration</h3>
          <p className="text-sm text-muted-foreground">
            Connecting a large JSON dictionary to every component creates a hidden dependency:
            any change in the translation context can trigger re-renders across the entire tree.
            During SSR hydration, parsing and attaching massive translation objects adds latency
            before the page becomes interactive — directly impacting Time to Interactive (TTI).
          </p>
        </div>
        <div className="rounded-lg border border-border bg-card p-6">
          <h3 className="mb-2 text-lg font-semibold text-foreground">Dynamic Loading</h3>
          <p className="text-sm text-muted-foreground">
            Loading all translations upfront overloads the initial payload. Dynamic (lazy) loading
            splits translations by route or namespace, sending only what the current page needs.
            However, lazy loading introduces its own trade-offs: waterfall requests, flash of
            untranslated content, and caching complexity. Measuring both strategies is essential.
          </p>
        </div>
      </div>
    </section>

    {/* Deeper explanations */}
    <section className="mb-16 mx-auto max-w-3xl space-y-6">
      <h2 className="text-2xl font-bold text-foreground">Understanding the Impact</h2>

      <div className="rounded-lg border border-border bg-card p-6">
        <h3 className="mb-2 text-lg font-semibold text-foreground">
          Why a single large JSON can hurt performance
        </h3>
        <p className="text-sm text-muted-foreground">
          Many i18n libraries store translations in a single JSON object provided via React
          context. When this object is large (thousands of keys), every component that consumes
          translations holds a reference to the entire dictionary. This means:
        </p>
        <ul className="mt-3 space-y-2 text-sm text-muted-foreground list-disc pl-5">
          <li>The JSON must be parsed on every page load — blocking the main thread.</li>
          <li>
            Context-based architectures can cause cascading re-renders when the locale changes,
            because every consumer is notified even if their specific keys didn't change.
          </li>
          <li>
            During server-side rendering, the full dictionary is serialized into the HTML payload,
            increasing the document size that must be downloaded and hydrated.
          </li>
        </ul>
      </div>

      <div className="rounded-lg border border-border bg-card p-6">
        <h3 className="mb-2 text-lg font-semibold text-foreground">
          The trade-offs of dynamic loading
        </h3>
        <p className="text-sm text-muted-foreground">
          Splitting translations into per-route or per-namespace chunks can dramatically reduce
          the initial payload. But it introduces new challenges:
        </p>
        <ul className="mt-3 space-y-2 text-sm text-muted-foreground list-disc pl-5">
          <li>
            <strong className="text-foreground">Waterfall requests:</strong> the app must first
            load, determine the locale, then fetch the right chunk — adding network round-trips.
          </li>
          <li>
            <strong className="text-foreground">Flash of untranslated content (FOUC):</strong>{" "}
            users may briefly see translation keys or a fallback language before the chunk arrives.
          </li>
          <li>
            <strong className="text-foreground">Cache invalidation:</strong> updating translations
            requires cache-busting strategies to ensure users get fresh content without
            re-downloading unchanged chunks.
          </li>
        </ul>
      </div>

      <div className="rounded-lg border border-border bg-card p-6">
        <h3 className="mb-2 text-lg font-semibold text-foreground">
          What this benchmark measures
        </h3>
        <p className="text-sm text-muted-foreground">
          This test app provides a controlled environment — 10 pages with realistic content — to
          compare i18n libraries across three axes: the weight they add to your JavaScript bundle,
          the time spent parsing and rendering translated content, and the effectiveness of their
          code-splitting and lazy-loading strategies. Each library is integrated into the same app
          so results are directly comparable.
        </p>
      </div>
    </section>

    {/* Quick results table */}
    <section>
      <h2 className="mb-6 text-2xl font-bold text-foreground">Sample Results</h2>
      <div className="overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-sm">
          <thead className="bg-muted">
            <tr>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Library</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Bundle Size</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Lookup Time</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Lazy Loading</th>
            </tr>
          </thead>
          <tbody>
            {[
              { lib: "react-i18next", size: "42.3 kB", time: "0.12ms", lazy: "Yes" },
              { lib: "react-intl", size: "38.1 kB", time: "0.15ms", lazy: "Manual" },
              { lib: "lingui", size: "12.8 kB", time: "0.08ms", lazy: "Yes" },
              { lib: "typesafe-i18n", size: "5.2 kB", time: "0.05ms", lazy: "Built-in" },
            ].map((r) => (
              <tr key={r.lib} className="border-t border-border">
                <td className="px-4 py-3 font-medium text-foreground">{r.lib}</td>
                <td className="px-4 py-3 text-muted-foreground">{r.size}</td>
                <td className="px-4 py-3 text-muted-foreground">{r.time}</td>
                <td className="px-4 py-3 text-muted-foreground">{r.lazy}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  </div>
);

export default Home;
