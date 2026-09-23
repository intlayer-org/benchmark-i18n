"use client";

import { T, useTranslate } from "@/i18n/tolgee";

export default function WhatWeMeasure() {
  const { t } = useTranslate();

  const metrics = [
    {
      metric: t("whatWeMeasure.bundleSizeImpact"),
      desc: t(
        "whatWeMeasure.theAdditionalJavascriptBytes"),
    },
    {
      metric: t("whatWeMeasure.renderingOverhead"),
      desc: t(
        "whatWeMeasure.howMuchExtraTimeTheLibraryAdds"),
    },
    {
      metric: t("whatWeMeasure.hydrationCost"),
      desc: t(
        "whatWeMeasure.duringSsrTranslationDataIsSerialized"),
    },
    {
      metric: t(
        "whatWeMeasure.lazyLoadingEffectiveness"),
      desc: t(
        "whatWeMeasure.whetherSplittingTranslationsByRoute"),
    },
    {
      metric: t("whatWeMeasure.localeSwitchSpeed"),
      desc: t(
        "whatWeMeasure.howFastTheAppCanSwitchFromOne"),
    },
  ];

  return (
    <section className="mt-12 mx-auto max-w-3xl">
      <h2 className="mb-4 text-2xl font-bold text-foreground">
        <T keyName="whatWeMeasure.whatWeMeasure" />
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
