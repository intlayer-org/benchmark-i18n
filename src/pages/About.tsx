const About = () => (
  <div className="container py-16">
    <h1 className="mb-4 text-3xl font-bold text-foreground">About This Benchmark</h1>
    <p className="mb-8 max-w-3xl text-muted-foreground">
      This is an open-source test application — not a product or a company. Its sole purpose is to
      provide a realistic, multi-page React app where different i18n libraries can be integrated
      and measured under identical conditions.
    </p>

    <div className="grid gap-8 md:grid-cols-2">
      <div className="rounded-lg border border-border bg-card p-6">
        <h2 className="mb-3 text-xl font-semibold text-foreground">Why This Exists</h2>
        <p className="text-sm text-muted-foreground">
          Choosing an i18n library is an architectural decision with long-term consequences.
          Most comparisons focus on API ergonomics, but few measure the performance cost: how
          much weight does the library add to the bundle? How does it affect rendering when
          thousands of translation keys are loaded? Does lazy loading actually help or just
          shift the cost? This benchmark answers those questions with real data.
        </p>
      </div>
      <div className="rounded-lg border border-border bg-card p-6">
        <h2 className="mb-3 text-xl font-semibold text-foreground">Methodology</h2>
        <p className="text-sm text-muted-foreground">
          The same 10-page app is built once per library. We measure the production bundle
          (via rollup-plugin-visualizer), run Lighthouse audits for loading metrics, and use
          React Profiler to capture render times during locale switches. All tests run in
          CI on consistent hardware to ensure reproducible results.
        </p>
      </div>
    </div>

    <section className="mt-12 mx-auto max-w-3xl">
      <h2 className="mb-4 text-2xl font-bold text-foreground">What We Measure</h2>
      <ul className="space-y-4">
        {[
          {
            metric: "Bundle size impact",
            desc: "The additional JavaScript bytes sent to users when the i18n library and its translation files are included. This directly affects download time on slow networks.",
          },
          {
            metric: "Rendering overhead",
            desc: "How much extra time the library adds to React's render cycle. Libraries that inject translations via a single context provider can cause unnecessary re-renders across the component tree.",
          },
          {
            metric: "Hydration cost",
            desc: "During SSR, translation data is serialized into HTML. Large dictionaries increase the HTML payload and slow down hydration — the moment the page becomes interactive.",
          },
          {
            metric: "Lazy loading effectiveness",
            desc: "Whether splitting translations by route or namespace actually reduces the initial load, and what trade-offs it introduces (waterfall requests, FOUC, cache complexity).",
          },
          {
            metric: "Locale switch speed",
            desc: "How fast the app can switch from one language to another at runtime — including fetching new translations, re-rendering components, and updating the DOM.",
          },
        ].map((m, i) => (
          <li key={i} className="rounded-md border border-border p-4">
            <span className="block text-sm font-bold text-primary">{m.metric}</span>
            <span className="block mt-1 text-sm text-muted-foreground">{m.desc}</span>
          </li>
        ))}
      </ul>
    </section>
  </div>
);

export default About;
