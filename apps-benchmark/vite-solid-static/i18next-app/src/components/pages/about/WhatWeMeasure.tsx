import { For } from "solid-js";
import { trans } from "../../../i18n";

export default function WhatWeMeasure() {
  const metrics = [
    {
      metricKey: "bundleSizeImpact",
      descKey: "bundleSizeImpactDesc",
    },
    {
      metricKey: "renderingOverhead",
      descKey: "renderingOverheadDesc",
    },
    {
      metricKey: "hydrationCost",
      descKey: "hydrationCostDesc",
    },
    {
      metricKey: "lazyLoading",
      descKey: "lazyLoadingDesc",
    },
    {
      metricKey: "localeSwitch",
      descKey: "localeSwitchDesc",
    },
  ];

  return (
    <section class="mx-auto mt-12 max-w-3xl">
      <h2 class="mb-4 text-2xl font-bold text-foreground">
        {trans("about.whatWeMeasure.title")}
      </h2>
      <ul class="space-y-4">
        <For each={metrics}>
          {(row) => (
            <li class="rounded-md border border-border p-4">
              <span class="block text-sm font-bold text-primary">
                {trans(`about.whatWeMeasure.${row.metricKey}`)}
              </span>
              <span class="mt-1 block text-sm text-muted-foreground">
                {trans(`about.whatWeMeasure.${row.descKey}`)}
              </span>
            </li>
          )}
        </For>
      </ul>
    </section>
  );
}
