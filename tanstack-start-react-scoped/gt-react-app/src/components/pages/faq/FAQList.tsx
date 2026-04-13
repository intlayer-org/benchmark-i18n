import { T } from "gt-react";

const faqs = [
  {
    q: <T>What is i18n Benchmark?</T>,
    a: (
      <T>
        i18n Benchmark is an open-source benchmarking suite that measures and
        compares the performance, bundle size, and developer experience of
        internationalization libraries for JavaScript and React applications.
      </T>
    ),
  },
  {
    q: <T>How are benchmarks conducted?</T>,
    a: (
      <T>
        We run standardized tests in isolated environments using consistent
        hardware. Each benchmark is repeated multiple times to ensure
        statistical significance. All test configurations are publicly available
        in our GitHub repository.
      </T>
    ),
  },
  {
    q: <T>Which libraries are currently supported?</T>,
    a: (
      <T>
        We support react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n,
        next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n,
        @fluent/react, and Tolgee.
      </T>
    ),
  },
  {
    q: <T>Can I submit my own benchmarks?</T>,
    a: (
      <T>
        Yes! Community benchmark submissions are welcome. Fork our repository,
        add your benchmark following our contribution guide, and submit a pull
        request. Our team will review and merge qualifying submissions.
      </T>
    ),
  },
  {
    q: <T>How often are benchmarks updated?</T>,
    a: (
      <T>
        We re-run all benchmarks weekly against the latest stable versions of
        each library. Major version releases trigger an immediate re-benchmark
        cycle.
      </T>
    ),
  },
  {
    q: <T>Is the data reliable?</T>,
    a: (
      <T>
        We follow rigorous statistical methodology including warm-up runs,
        outlier detection, and confidence intervals. All raw data is published
        alongside our analysis for full transparency.
      </T>
    ),
  },
  {
    q: <T>Do you offer consulting services?</T>,
    a: (
      <T>
        Yes, our Enterprise plan includes consulting hours for teams evaluating
        i18n solutions. We can provide tailored recommendations based on your
        specific use case, scale, and constraints.
      </T>
    ),
  },
  {
    q: <T>How can I contribute?</T>,
    a: (
      <T>
        There are many ways to contribute: submit benchmarks, improve
        documentation, report bugs, suggest new metrics, or sponsor the project.
        Visit our GitHub repository for more details.
      </T>
    ),
  },
];

export default function FAQList() {
  return (
    <div className="mx-auto max-w-3xl space-y-4">
      {faqs.map((f, i) => (
        <details
          key={i}
          className="group rounded-lg border border-border bg-card"
        >
          <summary className="cursor-pointer px-6 py-4 text-sm font-medium text-foreground hover:bg-accent/50 transition-colors">
            {f.q}
          </summary>
          <p className="px-6 pb-4 text-sm text-muted-foreground">{f.a}</p>
        </details>
      ))}
    </div>
  );
}
