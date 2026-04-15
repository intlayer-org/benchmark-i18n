"use client";

import { useTranslations } from "next-intl";

export default function WhatWeMeasure() {
  const t = useTranslations();

  const metrics = [
    {
      metric: t("what-we-measure.bundleSizeImpact"),
      desc: t("what-we-measure.theAdditionalJavascriptBytesSent"),
    },
    {
      metric: t("what-we-measure.renderingOverhead"),
      desc: t("what-we-measure.howMuchExtraTimeThe"),
    },
    {
      metric: t("what-we-measure.hydrationCost"),
      desc: t("what-we-measure.duringSsrTranslationDataIs"),
    },
    {
      metric: t("what-we-measure.lazyLoadingEffectiveness"),
      desc: t("what-we-measure.whetherSplittingTranslationsByRoute"),
    },
    {
      metric: t("what-we-measure.localeSwitchSpeed"),
      desc: t("what-we-measure.howFastTheAppCan"),
    },
  ];

  return (
    <section className="mt-12 mx-auto max-w-3xl">
      <h2 className="mb-4 text-2xl font-bold text-foreground">
        {t("what-we-measure.whatWeMeasure")}
      </h2>
      <ul className="space-y-4">
        {metrics.map((m) => (
          <li key={m.metric} className="rounded-md border border-border p-4">
            <span className="block text-sm font-bold text-primary">
              {m.metric}
            </span>
            <span className="block mt-1 text-sm text-muted-foreground">
              {m.desc}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
