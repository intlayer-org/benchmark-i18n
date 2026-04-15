"use client";

import useTranslation from "next-translate/useTranslation";

export default function WhatWeMeasure() {
  const { t } = useTranslation("common");
  const metrics = [
    {
      metric: t("about.whatWeMeasure.bundleSizeImpact"),
      desc: t("about.whatWeMeasure.theAdditionalJavascriptBytesSent"),
    },
    {
      metric: t("about.whatWeMeasure.renderingOverhead"),
      desc: t("about.whatWeMeasure.howMuchExtraTimeThe"),
    },
    {
      metric: t("about.whatWeMeasure.hydrationCost"),
      desc: t("about.whatWeMeasure.duringSsrTranslationDataIs"),
    },
    {
      metric: t("about.whatWeMeasure.lazyLoadingEffectiveness"),
      desc: t("about.whatWeMeasure.whetherSplittingTranslationsByRoute"),
    },
    {
      metric: t("about.whatWeMeasure.localeSwitchSpeed"),
      desc: t("about.whatWeMeasure.howFastTheAppCan"),
    },
  ];

  return (
    <section className="mt-12 mx-auto max-w-3xl">
      <h2 className="mb-4 text-2xl font-bold text-foreground">
        {t("about.whatWeMeasure.whatWeMeasure")}
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
