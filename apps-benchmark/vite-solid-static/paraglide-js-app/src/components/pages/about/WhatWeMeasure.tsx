import { For } from "solid-js";
import * as m from "../../../paraglide/messages";

export default function WhatWeMeasure() {
  const metrics = () => [
    {
      metric: m.about_whatWeMeasure_bundleSizeImpact(),
      desc: m.about_whatWeMeasure_bundleSizeImpactDesc(),
    },
    {
      metric: m.about_whatWeMeasure_renderingOverhead(),
      desc: m.about_whatWeMeasure_renderingOverheadDesc(),
    },
    {
      metric: m.about_whatWeMeasure_hydrationCost(),
      desc: m.about_whatWeMeasure_hydrationCostDesc(),
    },
    {
      metric: m.about_whatWeMeasure_lazyLoading(),
      desc: m.about_whatWeMeasure_lazyLoadingDesc(),
    },
    {
      metric: m.about_whatWeMeasure_localeSwitch(),
      desc: m.about_whatWeMeasure_localeSwitchDesc(),
    },
  ];

  return (
    <section class="mx-auto mt-12 max-w-3xl">
      <h2 class="mb-4 text-2xl font-bold text-foreground">{m.about_whatWeMeasure_title()}</h2>
      <ul class="space-y-4">
        <For each={metrics()}>
          {(item) => (
            <li class="rounded-md border border-border p-4">
              <span class="block text-sm font-bold text-primary">{item.metric}</span>
              <span class="mt-1 block text-sm text-muted-foreground">
                {item.desc}
              </span>
            </li>
          )}
        </For>
      </ul>
    </section>
  );
}

