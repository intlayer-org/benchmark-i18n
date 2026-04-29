<script lang="ts">
  import { get } from 'svelte/store';

  import { useIntlayer } from "svelte-intlayer";
  import { usePerformanceMeasure } from "$lib/performanceMeasure";

  usePerformanceMeasure("ResultsTable");

  const content = useIntlayer("results-table");

  const results = [
    {
      lib: "react-i18next",
      size: "42.3 kB",
      time: "0.12ms",
      lazy: get(content).yes,
    },
    {
      lib: "react-intl",
      size: "38.1 kB",
      time: "0.15ms",
      lazy: get(content).manual,
    },
    { lib: "lingui", size: "12.8 kB", time: "0.08ms", lazy: get(content).yes1 },
    {
      lib: "typesafe-i18n",
      size: "5.2 kB",
      time: "0.05ms",
      lazy: "Built-in",
    },
  ];
</script>

<section>
  <h2 class="mb-6 text-2xl font-bold text-foreground">
    {$content.title}
  </h2>
  <div class="overflow-x-auto rounded-lg border border-border">
    <table class="w-full text-sm">
      <thead class="bg-muted">
        <tr>
          <th class="px-4 py-3 text-left font-medium text-muted-foreground">
            {$content.columns.library}
          </th>
          <th class="px-4 py-3 text-left font-medium text-muted-foreground">
            {$content.columns.bundleSize}
          </th>
          <th class="px-4 py-3 text-left font-medium text-muted-foreground">
            {$content.columns.lookupTime}
          </th>
          <th class="px-4 py-3 text-left font-medium text-muted-foreground">
            {$content.columns.lazyLoading}
          </th>
        </tr>
      </thead>
      <tbody>
        {#each results as r (r.lib)}
          <tr class="border-t border-border">
            <td class="px-4 py-3 font-medium text-foreground">{r.lib}</td>
            <td class="px-4 py-3 text-muted-foreground">{r.size}</td>
            <td class="px-4 py-3 text-muted-foreground">{r.time}</td>
            <td class="px-4 py-3 text-muted-foreground">{r.lazy}</td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
</section>
