"use client";

import * as m from "../../../paraglide/messages";

export default function WhatWeMeasure() {
  const metrics = [
    {
      metric: m["what-we-measure.bundleSizeImpact"](),
      desc: m["what-we-measure.theAdditionalJavascriptBytesSent"](),
    },
    {
      metric: m["what-we-measure.renderingOverhead"](),
      desc: m["what-we-measure.howMuchExtraTimeThe"](),
    },
    {
      metric: m["what-we-measure.hydrationCost"](),
      desc: m["what-we-measure.duringSsrTranslationDataIs"](),
    },
    {
      metric: m["what-we-measure.lazyLoadingEffectiveness"](),
      desc: m["what-we-measure.whetherSplittingTranslationsByRoute"](),
    },
    {
      metric: m["what-we-measure.localeSwitchSpeed"](),
      desc: m["what-we-measure.howFastTheAppCan"](),
    },
  ];

  return (
    <section className="mt-12 mx-auto max-w-3xl">
      <h2 className="mb-4 text-2xl font-bold text-foreground">
        {m["what-we-measure.whatWeMeasure"]()}
      </h2>
      <ul className="space-y-4">
        {metrics.map((metricEl) => (
          <li
            key={metricEl.metric}
            className="rounded-md border border-border p-4"
          >
            <span className="block text-sm font-bold text-primary">
              {metricEl.metric}
            </span>
            <span className="block mt-1 text-sm text-muted-foreground">
              {metricEl.desc}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
