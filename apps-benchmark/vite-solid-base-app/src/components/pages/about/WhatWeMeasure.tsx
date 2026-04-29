import { For } from "solid-js";

export default function WhatWeMeasure() {
  const metrics = [
    {
      metric: "Bundle size impact",
      desc: "The additional JavaScript bytes sent to users when the i18n library and its translation files are included. This directly affects download time on slow networks.",
    },
    {
      metric: "Rendering overhead",
      desc: "How much extra time the library adds to React's render cycle. Libraries that inject translations via a single context provider can cause unnecessary re-renders across the component tree.",
    },
    {
      metric: "Hydration cost",
      desc: "During SSR, translation data is serialized into HTML. Large dictionaries increase the HTML payload and slow down hydration — the moment the page becomes interactive.",
    },
    {
      metric: "Lazy loading effectiveness",
      desc: "Whether splitting translations by route or namespace actually reduces the initial load, and what trade-offs it introduces (waterfall requests, FOUC, cache complexity).",
    },
    {
      metric: "Locale switch speed",
      desc: "How fast the app can switch from one language to another at runtime — including fetching new translations, re-rendering components, and updating the DOM.",
    },
  ];

  return (
    <section class="mx-auto mt-12 max-w-3xl">
      <h2 class="mb-4 text-2xl font-bold text-foreground">What We Measure</h2>
      <ul class="space-y-4">
        <For each={metrics}>
          {(m) => (
            <li class="rounded-md border border-border p-4">
              <span class="block text-sm font-bold text-primary">{m.metric}</span>
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
