import { useIntlayer } from 'solid-intlayer';
import { For } from 'solid-js';

export default function WhatWeMeasure() {
  const content = useIntlayer('what-we-measure');

  const metrics = [
    {
      metric: content().bundleSizeImpact.value,
      desc: content().theAdditionalJavascriptBytesSent.value,
    },
    {
      metric: content().renderingOverhead.value,
      desc: content().howMuchExtraTimeThe.value,
    },
    {
      metric: content().hydrationCost.value,
      desc: content().duringSsrTranslationDataIs.value,
    },
    {
      metric: content().lazyLoadingEffectiveness.value,
      desc: content().whetherSplittingTranslationsByRoute.value,
    },
    {
      metric: content().localeSwitchSpeed.value,
      desc: content().howFastTheAppCan.value,
    },
  ];

  return (
    <section class="mx-auto mt-12 max-w-3xl">
      <h2 class="mb-4 text-2xl font-bold text-foreground">
        {content().whatWeMeasure}
      </h2>
      <ul class="space-y-4">
        <For each={metrics}>
          {(m) => (
            <li class="rounded-md border border-border p-4">
              <span class="block text-sm font-bold text-primary">
                {m.metric}
              </span>
              <span class="mt-1 block text-sm text-muted-foreground">
                {m.desc}
              </span>
            </li>
          )}
        </For>
      </ul>
    </section>
  );
}
