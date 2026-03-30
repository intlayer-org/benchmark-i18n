const About = () => (
  <div className="container py-16">
    <h1 className="mb-4 text-3xl font-bold text-foreground">About Us</h1>
    <p className="mb-8 max-w-3xl text-muted-foreground">
      We are a team of passionate developers dedicated to helping the community choose the right
      internationalization solution. Our benchmark suite has been used by over 10,000 developers worldwide.
    </p>

    <div className="grid gap-8 md:grid-cols-2">
      <div className="rounded-lg border border-border bg-card p-6">
        <h2 className="mb-3 text-xl font-semibold text-foreground">Our Mission</h2>
        <p className="text-sm text-muted-foreground">
          To provide unbiased, reproducible, and comprehensive benchmarks for internationalization
          libraries. We believe every developer deserves access to objective data when making
          architectural decisions that impact their users across the globe.
        </p>
      </div>
      <div className="rounded-lg border border-border bg-card p-6">
        <h2 className="mb-3 text-xl font-semibold text-foreground">Our Story</h2>
        <p className="text-sm text-muted-foreground">
          Founded in 2024, i18n Benchmark started as a side project to compare react-i18next and
          react-intl. It has since grown into a full-featured benchmarking platform covering
          all major i18n libraries across multiple frameworks.
        </p>
      </div>
    </div>

    <section className="mt-12">
      <h2 className="mb-4 text-2xl font-bold text-foreground">Key Milestones</h2>
      <ul className="space-y-4">
        {[
          { year: "2024", event: "Project launched with support for 3 libraries" },
          { year: "2024", event: "Reached 1,000 GitHub stars" },
          { year: "2025", event: "Added automated CI benchmarking pipeline" },
          { year: "2025", event: "Expanded to cover 12 i18n libraries" },
          { year: "2026", event: "Launched community-driven benchmark submissions" },
        ].map((m, i) => (
          <li key={i} className="flex gap-4 rounded-md border border-border p-4">
            <span className="text-sm font-bold text-primary">{m.year}</span>
            <span className="text-sm text-muted-foreground">{m.event}</span>
          </li>
        ))}
      </ul>
    </section>
  </div>
);

export default About;
