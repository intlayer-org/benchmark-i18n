import { useLingui } from "@lingui/react";

export default function FAQList() {
  const { i18n } = useLingui();

  const faqs = [
    {
      q: i18n._({
        id: "faq-list.whatIsI18nBenchmark",
        message: "What is i18n Benchmark?",
      }),
      a: i18n._({
        id: "faq-list.whatIsI18nBenchmarkAnswer",
        message:
          "i18n Benchmark is an open-source benchmarking suite that measures and compares the performance, bundle size, and developer experience of internationalization libraries for JavaScript and React applications.",
      }),
    },
    {
      q: i18n._({
        id: "faq-list.howAreBenchmarksConducted",
        message: "How are benchmarks conducted?",
      }),
      a: i18n._({
        id: "faq-list.weRunStandardizedTestsIn",
        message:
          "We run standardized tests in isolated environments using consistent hardware. Each benchmark is repeated multiple times to ensure statistical significance. All test configurations are publicly available in our GitHub repository.",
      }),
    },
    {
      q: i18n._({
        id: "faq-list.whichLibrariesAreCurrentlySupported",
        message: "Which libraries are currently supported?",
      }),
      a: i18n._({
        id: "faq-list.weSupportReactI18nextReact",
        message:
          "We support react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react, and Tolgee.",
      }),
    },
    {
      q: i18n._({
        id: "faq-list.canISubmitMyOwn",
        message: "Can I submit my own benchmarks?",
      }),
      a: i18n._({
        id: "faq-list.yesCommunityBenchmarkSubmissionsAre",
        message:
          "Yes! Community benchmark submissions are welcome. Fork our repository, add your benchmark following our contribution guide, and submit a pull request. Our team will review and merge qualifying submissions.",
      }),
    },
    {
      q: i18n._({
        id: "faq-list.howOftenAreBenchmarksUpdated",
        message: "How often are benchmarks updated?",
      }),
      a: i18n._({
        id: "faq-list.weReRunAllBenchmarks",
        message:
          "We re-run all benchmarks weekly against the latest stable versions of each library. Major version releases trigger an immediate re-benchmark cycle.",
      }),
    },
    {
      q: i18n._({
        id: "faq-list.isTheDataReliable",
        message: "Is the data reliable?",
      }),
      a: i18n._({
        id: "faq-list.weFollowRigorousStatisticalMethodology",
        message:
          "We follow rigorous statistical methodology including warm-up runs, outlier detection, and confidence intervals. All raw data is published alongside our analysis for full transparency.",
      }),
    },
    {
      q: i18n._({
        id: "faq-list.doYouOfferConsultingServices",
        message: "Do you offer consulting services?",
      }),
      a: i18n._({
        id: "faq-list.yesOurEnterprisePlanIncludes",
        message:
          "Yes, our Enterprise plan includes consulting hours for teams evaluating i18n solutions. We can provide tailored recommendations based on your specific use case, scale, and constraints.",
      }),
    },
    {
      q: i18n._({
        id: "faq-list.howCanIContribute",
        message: "How can I contribute?",
      }),
      a: i18n._({
        id: "faq-list.thereAreManyWaysTo",
        message:
          "There are many ways to contribute: submit benchmarks, improve documentation, report bugs, suggest new metrics, or sponsor the project. Visit our GitHub repository for more details.",
      }),
    },
  ];

  return (
    <div className="mx-auto max-w-3xl space-y-4">
      {faqs.map((f) => (
        <details
          key={f.q}
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
