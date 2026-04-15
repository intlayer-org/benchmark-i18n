"use client";

import { useTranslations } from "next-intl";

export default function FAQList() {
  const t = useTranslations();

  const faqs = [
    {
      q: t("faq-list.whatIsI18nBenchmark"),
      a: t("faq-list.whatIsI18nBenchmarkAnswer"),
    },
    {
      q: t("faq-list.howAreBenchmarksConducted"),
      a: t("faq-list.weRunStandardizedTestsIn"),
    },
    {
      q: t("faq-list.whichLibrariesAreCurrentlySupported"),
      a: t("faq-list.weSupportReactI18nextReact"),
    },
    {
      q: t("faq-list.canISubmitMyOwn"),
      a: t("faq-list.yesCommunityBenchmarkSubmissionsAre"),
    },
    {
      q: t("faq-list.howOftenAreBenchmarksUpdated"),
      a: t("faq-list.weReRunAllBenchmarks"),
    },
    {
      q: t("faq-list.isTheDataReliable"),
      a: t("faq-list.weFollowRigorousStatisticalMethodology"),
    },
    {
      q: t("faq-list.doYouOfferConsultingServices"),
      a: t("faq-list.yesOurEnterprisePlanIncludes"),
    },
    {
      q: t("faq-list.howCanIContribute"),
      a: t("faq-list.thereAreManyWaysTo"),
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
