"use client";

import { useTranslation } from "react-i18next";

export default function FAQList() {
  const { t } = useTranslation("faq");

  const faqs = [
    {
      q: t("faqList.howAreTheBenchmarks"),
      a: t("faqList.allBenchmarksAreRun"),
    },
    {
      q: t("faqList.whatLibrariesAreCurrently"),
      a: t("faqList.weCurrentlyBenchmarkReactI18next"),
    },
    {
      q: t("faqList.canIContributeA"),
      a: t("faqList.absolutelyWeWelcomeCommunity"),
    },
    {
      q: t("faqList.howOftenAreResults"),
      a: t("faqList.benchmarksRunAutomaticallyVia"),
    },
    {
      q: t("faqList.areTheResultsStatistically"),
      a: t("faqList.yesWeUseThe"),
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
