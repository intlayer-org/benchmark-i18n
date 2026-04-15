"use client";

import { useTranslation } from "react-i18next";

export default function FAQList() {
  const { t } = useTranslation();

  const faqs = [
    {
      q: t("faq.faqList.howAreTheBenchmarks"),
      a: t("faq.faqList.allBenchmarksAreRun"),
    },
    {
      q: t("faq.faqList.whatLibrariesAreCurrently"),
      a: t("faq.faqList.weCurrentlyBenchmarkReactI18next"),
    },
    {
      q: t("faq.faqList.canIContributeA"),
      a: t("faq.faqList.absolutelyWeWelcomeCommunity"),
    },
    {
      q: t("faq.faqList.howOftenAreResults"),
      a: t("faq.faqList.benchmarksRunAutomaticallyVia"),
    },
    {
      q: t("faq.faqList.areTheResultsStatistically"),
      a: t("faq.faqList.yesWeUseThe"),
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
