import { useIntl } from "react-intl";

export default function WhatWeMeasure() {
  const intl = useIntl();
  const metrics = [
    {
      metric: intl.formatMessage({ id: "what-we-measure.bundleSizeImpact" }),
      desc: intl.formatMessage({
        id: "what-we-measure.theAdditionalJavascriptBytesSent",
      }),
    },
    {
      metric: intl.formatMessage({ id: "what-we-measure.renderingOverhead" }),
      desc: intl.formatMessage({ id: "what-we-measure.howMuchExtraTimeThe" }),
    },
    {
      metric: intl.formatMessage({ id: "what-we-measure.hydrationCost" }),
      desc: intl.formatMessage({ id: "what-we-measure.duringSsrTranslationDataIs" }),
    },
    {
      metric: intl.formatMessage({
        id: "what-we-measure.lazyLoadingEffectiveness",
      }),
      desc: intl.formatMessage({
        id: "what-we-measure.whetherSplittingTranslationsByRoute",
      }),
    },
    {
      metric: intl.formatMessage({ id: "what-we-measure.localeSwitchSpeed" }),
      desc: intl.formatMessage({ id: "what-we-measure.howFastTheAppCan" }),
    },
  ];

  return (
    <section className="mt-12 mx-auto max-w-3xl">
      <h2 className="mb-4 text-2xl font-bold text-foreground">
        {intl.formatMessage({ id: "what-we-measure.whatWeMeasure" })}
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
