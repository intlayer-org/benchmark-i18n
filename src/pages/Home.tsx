const Home = () => (
  <div className="container py-16">
    <section className="mb-16 text-center">
      <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground">
        Welcome to i18n Benchmark
      </h1>
      <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
        The most comprehensive benchmarking suite for internationalization solutions.
        Compare performance, bundle size, and developer experience across all major i18n libraries.
      </p>
      <div className="mt-8 flex justify-center gap-4">
        <button className="rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity">
          Get Started
        </button>
        <button className="rounded-lg border border-border px-6 py-3 text-sm font-medium text-foreground hover:bg-accent transition-colors">
          View Documentation
        </button>
      </div>
    </section>

    <section className="grid gap-6 md:grid-cols-3">
      {[
        { title: "Lightning Fast", desc: "Measure translation lookup times down to the microsecond across thousands of keys." },
        { title: "Bundle Analysis", desc: "Compare the real-world bundle size impact of each i18n library on your application." },
        { title: "Developer Experience", desc: "Evaluate API ergonomics, TypeScript support, and tooling integration." },
      ].map((f) => (
        <div key={f.title} className="rounded-lg border border-border bg-card p-6">
          <h3 className="mb-2 text-lg font-semibold text-foreground">{f.title}</h3>
          <p className="text-sm text-muted-foreground">{f.desc}</p>
        </div>
      ))}
    </section>

    <section className="mt-16">
      <h2 className="mb-6 text-2xl font-bold text-foreground">Latest Results</h2>
      <div className="overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-sm">
          <thead className="bg-muted">
            <tr>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Library</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Bundle Size</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Lookup Time</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Rating</th>
            </tr>
          </thead>
          <tbody>
            {[
              { lib: "react-i18next", size: "42.3 kB", time: "0.12ms", rating: "4.5/5" },
              { lib: "react-intl", size: "38.1 kB", time: "0.15ms", rating: "4.2/5" },
              { lib: "lingui", size: "12.8 kB", time: "0.08ms", rating: "4.7/5" },
              { lib: "typesafe-i18n", size: "5.2 kB", time: "0.05ms", rating: "4.8/5" },
            ].map((r) => (
              <tr key={r.lib} className="border-t border-border">
                <td className="px-4 py-3 font-medium text-foreground">{r.lib}</td>
                <td className="px-4 py-3 text-muted-foreground">{r.size}</td>
                <td className="px-4 py-3 text-muted-foreground">{r.time}</td>
                <td className="px-4 py-3 text-muted-foreground">{r.rating}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  </div>
);

export default Home;
