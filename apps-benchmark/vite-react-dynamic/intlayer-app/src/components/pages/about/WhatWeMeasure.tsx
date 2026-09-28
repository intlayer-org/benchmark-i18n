import { useIntlayer } from "react-intlayer";
export default function WhatWeMeasure() {
  const content = useIntlayer("what-we-measure");

  const metrics = [
    {
      metric: content.bundleSizeImpact.value,
      desc: content.theAdditionalJavascriptBytesSent.value,
    },
    {
      metric: content.renderingOverhead.value,
      desc: content.howMuchExtraTimeThe.value,
    },
    {
      metric: content.hydrationCost.value,
      desc: content.duringSsrTranslationDataIs.value,
    },
    {
      metric: content.lazyLoadingEffectiveness.value,
      desc: content.whetherSplittingTranslationsByRoute.value,
    },
    {
      metric: content.localeSwitchSpeed.value,
      desc: content.howFastTheAppCan.value,
    },
  ];

  return (
    <section className="mt-12 mx-auto max-w-3xl">
      <h2 className="mb-4 text-2xl font-bold text-foreground">
        {content.whatWeMeasure}
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
