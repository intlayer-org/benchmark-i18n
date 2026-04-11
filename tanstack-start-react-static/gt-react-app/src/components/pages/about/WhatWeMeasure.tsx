import { T } from "gt-react";

export default function WhatWeMeasure() {
  const metrics = [
    {
      metric: <T>Bundle size impact</T>,
      desc: (
        <T>
          The additional JavaScript bytes sent to users when the i18n library and
          its translation files are included. This directly affects download
          time on slow networks.
        </T>
      ),
    },
    {
      metric: <T>Rendering overhead</T>,
      desc: (
        <T>
          How much extra time the library adds to React's render cycle.
          Libraries that inject translations via a single context provider can
          cause unnecessary re-renders across the component tree.
        </T>
      ),
    },
    {
      metric: <T>Hydration cost</T>,
      desc: (
        <T>
          During SSR, translation data is serialized into HTML. Large
          dictionaries increase the HTML payload and slow down hydration — the
          moment the page becomes interactive.
        </T>
      ),
    },
    {
      metric: <T>Lazy loading effectiveness</T>,
      desc: (
        <T>
          Whether splitting translations by route or namespace actually reduces
          the initial load, and what trade-offs it introduces (waterfall
          requests, FOUC, cache complexity).
        </T>
      ),
    },
    {
      metric: <T>Locale switch speed</T>,
      desc: (
        <T>
          How fast the app can switch from one language to another at runtime —
          including fetching new translations, re-rendering components, and
          updating the DOM.
        </T>
      ),
    },
  ];

  return (
    <section className="mt-12 mx-auto max-w-3xl">
      <h2 className="mb-4 text-2xl font-bold text-foreground">
        <T>What We Measure</T>
      </h2>
      <ul className="space-y-4">
        {metrics.map((m) => (
          <li
            key={m.metric?.toString() || ""}
            className="rounded-md border border-border p-4"
          >
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
