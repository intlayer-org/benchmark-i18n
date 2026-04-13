import { useLingui } from "@lingui/react";

export default function WhatWeMeasure() {
  const { i18n } = useLingui();
  const t = (id: string) => i18n._(`what-we-measure.${id}`);

  const metrics = [
    {
      metric: t("bundleSizeImpact"),
      desc: t("theAdditionalJavascriptBytesSent"),
    },
    {
      metric: t("renderingOverhead"),
      desc: t("howMuchExtraTimeThe"),
    },
    {
      metric: t("hydrationCost"),
      desc: t("duringSsrTranslationDataIs"),
    },
    {
      metric: t("lazyLoadingEffectiveness"),
      desc: t("whetherSplittingTranslationsByRoute"),
    },
    {
      metric: t("localeSwitchSpeed"),
      desc: t("howFastTheAppCan"),
    },
  ];

  return (
    <section className="mt-12 mx-auto max-w-3xl">
      <h2 className="mb-4 text-2xl font-bold text-foreground">
        {t("whatWeMeasure")}
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
