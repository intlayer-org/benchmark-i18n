<script lang="ts">
  import { _ } from "svelte-i18n";
  import { usePerformanceMeasure } from "$lib/performanceMeasure";

  usePerformanceMeasure("ResultsTable");

  const results = [
    { lib: "react-i18next", size: "42.3 kB", time: "0.12ms", lazyMsg: "yes" as const },
    { lib: "react-intl", size: "38.1 kB", time: "0.15ms", lazyMsg: "manual" as const },
    { lib: "lingui", size: "12.8 kB", time: "0.08ms", lazyMsg: "yes" as const },
    {
      lib: "typesafe-i18n",
      size: "5.2 kB",
      time: "0.05ms",
      lazyMsg: "builtIn" as const,
    },
  ];
</script>

<section>
  <h2 class="mb-6 text-2xl font-bold text-foreground">
    {$_("home.resultsTable.title")}
  </h2>
  <div class="overflow-x-auto rounded-lg border border-border">
    <table class="w-full text-sm">
      <thead class="bg-muted">
        <tr>
          <th class="px-4 py-3 text-left font-medium text-muted-foreground">
            {$_("home.resultsTable.library")}
          </th>
          <th class="px-4 py-3 text-left font-medium text-muted-foreground">
            {$_("home.resultsTable.bundleSize")}
          </th>
          <th class="px-4 py-3 text-left font-medium text-muted-foreground">
            {$_("home.resultsTable.lookupTime")}
          </th>
          <th class="px-4 py-3 text-left font-medium text-muted-foreground">
            {$_("home.resultsTable.lazyLoading")}
          </th>
        </tr>
      </thead>
      <tbody>
        {#each results as r (r.lib)}
          <tr class="border-t border-border">
            <td class="px-4 py-3 font-medium text-foreground">{r.lib}</td>
            <td class="px-4 py-3 text-muted-foreground">{r.size}</td>
            <td class="px-4 py-3 text-muted-foreground">{r.time}</td>
            <td class="px-4 py-3 text-muted-foreground">
              {$_(`home.resultsTable.${r.lazyMsg}`)}
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
</section>
