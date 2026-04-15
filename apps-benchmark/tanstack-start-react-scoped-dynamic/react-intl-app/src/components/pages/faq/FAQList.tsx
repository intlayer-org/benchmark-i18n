import { useIntl } from "react-intl";

export default function FAQList() {
  const intl = useIntl();

  const faqs = [
    {
      q: intl.formatMessage({ id: "faq-list.whatIsI18nBenchmark" }),
      a: intl.formatMessage({ id: "faq-list.whatIsI18nBenchmarkAnswer" }),
    },
    {
      q: intl.formatMessage({ id: "faq-list.howAreBenchmarksConducted" }),
      a: intl.formatMessage({ id: "faq-list.weRunStandardizedTestsIn" }),
    },
    {
      q: intl.formatMessage({ id: "faq-list.whichLibrariesAreCurrentlySupported" }),
      a: intl.formatMessage({ id: "faq-list.weSupportReactI18nextReact" }),
    },
    {
      q: intl.formatMessage({ id: "faq-list.canISubmitMyOwn" }),
      a: intl.formatMessage({ id: "faq-list.yesCommunityBenchmarkSubmissionsAre" }),
    },
    {
      q: intl.formatMessage({ id: "faq-list.howOftenAreBenchmarksUpdated" }),
      a: intl.formatMessage({ id: "faq-list.weReRunAllBenchmarks" }),
    },
    {
      q: intl.formatMessage({ id: "faq-list.isTheDataReliable" }),
      a: intl.formatMessage({ id: "faq-list.weFollowRigorousStatisticalMethodology" }),
    },
    {
      q: intl.formatMessage({ id: "faq-list.doYouOfferConsultingServices" }),
      a: intl.formatMessage({ id: "faq-list.yesOurEnterprisePlanIncludes" }),
    },
    {
      q: intl.formatMessage({ id: "faq-list.howCanIContribute" }),
      a: intl.formatMessage({ id: "faq-list.thereAreManyWaysTo" }),
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
