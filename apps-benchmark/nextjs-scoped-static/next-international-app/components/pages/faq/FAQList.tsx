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
