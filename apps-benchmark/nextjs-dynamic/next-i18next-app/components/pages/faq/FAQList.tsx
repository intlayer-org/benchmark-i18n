"use client";

import { useTranslation } from "react-i18next";

export default function FAQList() {
  const { t } = useTranslation();

  const faqs = [
    {
      q: t("faq.faqList.whatIsI18nBenchmark"),
      a: t("faq.faqList.whatIsI18nBenchmarkAnswer"),
    },
    {
      q: t("faq.faqList.howAreBenchmarksConducted"),
      a: t("faq.faqList.weRunStandardizedTestsIn"),
    },
    {
      q: t("faq.faqList.whichLibrariesAreCurrentlySupported"),
      a: t("faq.faqList.weSupportReactI18nextReact"),
    },
    {
      q: t("faq.faqList.canISubmitMyOwn"),
      a: t("faq.faqList.yesCommunityBenchmarkSubmissionsAre"),
    },
    {
      q: t("faq.faqList.howOftenAreBenchmarksUpdated"),
      a: t("faq.faqList.weReRunAllBenchmarks"),
    },
    {
      q: t("faq.faqList.isTheDataReliable"),
      a: t("faq.faqList.weFollowRigorousStatisticalMethodology"),
    },
    {
      q: t("faq.faqList.doYouOfferConsultingServices"),
      a: t("faq.faqList.yesOurEnterprisePlanIncludes"),
    },
    {
      q: t("faq.faqList.howCanIContribute"),
      a: t("faq.faqList.thereAreManyWaysTo"),
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
