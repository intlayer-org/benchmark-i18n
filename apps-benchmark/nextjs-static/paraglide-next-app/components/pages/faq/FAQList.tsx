"use client";

import * as m from "../../../paraglide/messages";

export default function FAQList() {
  const faqs = [
    {
      q: m["faq-list.whatIsI18nBenchmark"](),
      a: m["faq-list.whatIsI18nBenchmarkAnswer"](),
    },
    {
      q: m["faq-list.howAreBenchmarksConducted"](),
      a: m["faq-list.weRunStandardizedTestsIn"](),
    },
    {
      q: m["faq-list.whichLibrariesAreCurrentlySupported"](),
      a: m["faq-list.weSupportReactI18nextReact"](),
    },
    {
      q: m["faq-list.canISubmitMyOwn"](),
      a: m["faq-list.yesCommunityBenchmarkSubmissionsAre"](),
    },
    {
      q: m["faq-list.howOftenAreBenchmarksUpdated"](),
      a: m["faq-list.weReRunAllBenchmarks"](),
    },
    {
      q: m["faq-list.isTheDataReliable"](),
      a: m["faq-list.weFollowRigorousStatisticalMethodology"](),
    },
    {
      q: m["faq-list.doYouOfferConsultingServices"](),
      a: m["faq-list.yesOurEnterprisePlanIncludes"](),
    },
    {
      q: m["faq-list.howCanIContribute"](),
      a: m["faq-list.thereAreManyWaysTo"](),
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
