import { useLingui } from "@lingui/react";

export default function WhatWeMeasure() {
  const { i18n } = useLingui();

  const metrics = [
    {
      metric: i18n._("what-we-measure.bundleSizeImpact"),
      desc: i18n._("what-we-measure.theAdditionalJavascriptBytesSent"),
    },
    {
      metric: i18n._("what-we-measure.renderingOverhead"),
      desc: i18n._("what-we-measure.howMuchExtraTimeThe"),
    },
    {
      metric: i18n._("what-we-measure.hydrationCost"),
      desc: i18n._("what-we-measure.duringSsrTranslationDataIs"),
    },
    {
      metric: i18n._("what-we-measure.lazyLoadingEffectiveness"),
      desc: i18n._("what-we-measure.whetherSplittingTranslationsByRoute"),
    },
    {
      metric: i18n._("what-we-measure.localeSwitchSpeed"),
      desc: i18n._("what-we-measure.howFastTheAppCan"),
    },
  ];

  return (
    <section className="mt-12 mx-auto max-w-3xl">
      <h2 className="mb-4 text-2xl font-bold text-foreground">
        {i18n._("what-we-measure.whatWeMeasure")}
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
