"use client";

import { useI18n } from "../../../locales/client";

export default function WhatWeMeasure() {
  const t = useI18n();

  const metrics = [
    {
      metric: t("about.what-we-measure.bundleSizeImpact"),
      desc: t("about.what-we-measure.theAdditionalJavascriptBytesSent"),
    },
    {
      metric: t("about.what-we-measure.renderingOverhead"),
      desc: t("about.what-we-measure.howMuchExtraTimeThe"),
    },
    {
      metric: t("about.what-we-measure.hydrationCost"),
      desc: t("about.what-we-measure.duringSsrTranslationDataIs"),
    },
    {
      metric: t("about.what-we-measure.lazyLoadingEffectiveness"),
      desc: t("about.what-we-measure.whetherSplittingTranslationsByRoute"),
    },
    {
      metric: t("about.what-we-measure.localeSwitchSpeed"),
      desc: t("about.what-we-measure.howFastTheAppCan"),
    },
  ];

  return (
    <section className="mt-12 mx-auto max-w-3xl">
      <h2 className="mb-4 text-2xl font-bold text-foreground">
        {t("about.what-we-measure.whatWeMeasure")}
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
