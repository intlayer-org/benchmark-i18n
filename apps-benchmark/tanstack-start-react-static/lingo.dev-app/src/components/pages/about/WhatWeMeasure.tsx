export default function WhatWeMeasure() {
  return (
    <section className="mt-12 mx-auto max-w-3xl">
      <h2 className="mb-4 text-2xl font-bold text-foreground">
        What We Measure
      </h2>
      <ul className="space-y-4">
        <li className="rounded-md border border-border p-4">
          <span className="block text-sm font-bold text-primary">
            Bundle size impact
          </span>
          <span className="block mt-1 text-sm text-muted-foreground">
            The additional JavaScript bytes sent to users when the i18n library and its translation files are included. This directly affects download time on slow networks.
          </span>
        </li>
        <li className="rounded-md border border-border p-4">
          <span className="block text-sm font-bold text-primary">
            Rendering overhead
          </span>
          <span className="block mt-1 text-sm text-muted-foreground">
            How much extra time the library adds to React's render cycle. Libraries that inject translations via a single context provider can cause unnecessary re-renders across the component tree.
          </span>
        </li>
        <li className="rounded-md border border-border p-4">
          <span className="block text-sm font-bold text-primary">
            Hydration cost
          </span>
          <span className="block mt-1 text-sm text-muted-foreground">
            During SSR, translation data is serialized into HTML. Large dictionaries increase the HTML payload and slow down hydration — the moment the page becomes interactive.
          </span>
        </li>
        <li className="rounded-md border border-border p-4">
          <span className="block text-sm font-bold text-primary">
            Lazy loading effectiveness
          </span>
          <span className="block mt-1 text-sm text-muted-foreground">
            Whether splitting translations by route or namespace actually reduces the initial load, and what trade-offs it introduces (waterfall requests, FOUC, cache complexity).
          </span>
        </li>
        <li className="rounded-md border border-border p-4">
          <span className="block text-sm font-bold text-primary">
            Locale switch speed
          </span>
          <span className="block mt-1 text-sm text-muted-foreground">
            How fast the app can switch from one language to another at runtime — including fetching new translations, re-rendering components, and updating the DOM.
          </span>
        </li>
      </ul>
    </section>
  );
}
