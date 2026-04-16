"use client";

import { useScopedI18n } from "../../../locales/client";

export default function FAQList() {
  const scopedT = useScopedI18n("faq-list");

  const faqs = [
    {
      q: scopedT("whatIsI18nBenchmark"),
      a: scopedT("whatIsI18nBenchmarkAnswer"),
    },
    {
      q: scopedT("howAreBenchmarksConducted"),
      a: scopedT("weRunStandardizedTestsIn"),
    },
    {
      q: scopedT("whichLibrariesAreCurrentlySupported"),
      a: scopedT("weSupportReactI18nextReact"),
    },
    {
      q: scopedT("canISubmitMyOwn"),
      a: scopedT("yesCommunityBenchmarkSubmissionsAre"),
    },
    {
      q: scopedT("howOftenAreBenchmarksUpdated"),
      a: scopedT("weReRunAllBenchmarks"),
    },
    {
      q: scopedT("isTheDataReliable"),
      a: scopedT("weFollowRigorousStatisticalMethodology"),
    },
    {
      q: scopedT("doYouOfferConsultingServices"),
      a: scopedT("yesOurEnterprisePlanIncludes"),
    },
    {
      q: scopedT("howCanIContribute"),
      a: scopedT("thereAreManyWaysTo"),
    },
  ];

  return (
    <div className="space-y-4">
      {faqs.map((faq) => (
        <div
          key={faq.q}
          className="rounded-lg border border-border bg-card p-6"
        >
          <h2 className="mb-2 text-lg font-semibold text-foreground">{faq.q}</h2>
          <p className="text-sm text-muted-foreground">{faq.a}</p>
        </div>
      ))}
    </div>
  );
}
