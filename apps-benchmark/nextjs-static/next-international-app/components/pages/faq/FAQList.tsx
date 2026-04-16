"use client";

import { useI18n } from "../../../locales/client";

export default function FAQList() {
  const t = useI18n();

  const faqs = [
    {
      q: t("faq.faq-list.whatIsI18nBenchmark"),
      a: t("faq.faq-list.whatIsI18nBenchmarkAnswer"),
    },
    {
      q: t("faq.faq-list.howAreBenchmarksConducted"),
      a: t("faq.faq-list.weRunStandardizedTestsIn"),
    },
    {
      q: t("faq.faq-list.whichLibrariesAreCurrentlySupported"),
      a: t("faq.faq-list.weSupportReactI18nextReact"),
    },
    {
      q: t("faq.faq-list.canISubmitMyOwn"),
      a: t("faq.faq-list.yesCommunityBenchmarkSubmissionsAre"),
    },
    {
      q: t("faq.faq-list.howOftenAreBenchmarksUpdated"),
      a: t("faq.faq-list.weReRunAllBenchmarks"),
    },
    {
      q: t("faq.faq-list.isTheDataReliable"),
      a: t("faq.faq-list.weFollowRigorousStatisticalMethodology"),
    },
    {
      q: t("faq.faq-list.doYouOfferConsultingServices"),
      a: t("faq.faq-list.yesOurEnterprisePlanIncludes"),
    },
    {
      q: t("faq.faq-list.howCanIContribute"),
      a: t("faq.faq-list.thereAreManyWaysTo"),
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
