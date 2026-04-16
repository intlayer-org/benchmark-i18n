"use client";

import { useScopedI18n } from "../../../locales/client";

export default function WhatWeMeasure() {
  const scopedT = useScopedI18n("what-we-measure");

  const metrics = [
    {
      metric: scopedT("bundleSizeImpact"),
      desc: scopedT("theAdditionalJavascriptBytesSent"),
    },
    {
      metric: scopedT("renderingOverhead"),
      desc: scopedT("howMuchExtraTimeThe"),
    },
    {
      metric: scopedT("hydrationCost"),
      desc: scopedT("duringSsrTranslationDataIs"),
    },
    {
      metric: scopedT("lazyLoadingEffectiveness"),
      desc: scopedT("whetherSplittingTranslationsByRoute"),
    },
    {
      metric: scopedT("localeSwitchSpeed"),
      desc: scopedT("howFastTheAppCan"),
    },
  ];

  return (
    <section className="mt-12 mx-auto max-w-3xl">
      <h2 className="mb-4 text-2xl font-bold text-foreground">
        {scopedT("whatWeMeasure")}
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
