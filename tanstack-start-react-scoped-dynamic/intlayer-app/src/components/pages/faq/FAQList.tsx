import { useIntlayer } from "react-intlayer";

export default function FAQList() {
  const content = useIntlayer("faq-list");

  const faqs = [
    {
      q: content.whatIsI18nBenchmark.value,
      a: "i18n Benchmark is an open-source benchmarking suite that measures and compares the performance, bundle size, and developer experience of internationalization libraries for JavaScript and React applications.",
    },
    {
      q: content.howAreBenchmarksConducted.value,
      a: content.weRunStandardizedTestsIn.value,
    },
    {
      q: content.whichLibrariesAreCurrentlySupported.value,
      a: content.weSupportReactI18nextReact.value,
    },
    {
      q: content.canISubmitMyOwn.value,
      a: content.yesCommunityBenchmarkSubmissionsAre.value,
    },
    {
      q: content.howOftenAreBenchmarksUpdated.value,
      a: content.weReRunAllBenchmarks.value,
    },
    {
      q: content.isTheDataReliable.value,
      a: content.weFollowRigorousStatisticalMethodology.value,
    },
    {
      q: content.doYouOfferConsultingServices.value,
      a: content.yesOurEnterprisePlanIncludes.value,
    },
    {
      q: content.howCanIContribute.value,
      a: content.thereAreManyWaysTo.value,
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
