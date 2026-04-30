<script setup lang="ts">
import { useIntlayer } from "vue-intlayer";
import { usePerformanceMeasure } from "../../../hooks/usePerformanceMeasure";

usePerformanceMeasure("ResultsTable");

const { title, columns, yes1, manual, yes } = useIntlayer("results-table");

const results = [
  {
    lib: "react-i18next",
    size: "42.3 kB",
    time: "0.12ms",
    lazy: yes,
  },
  {
    lib: "react-intl",
    size: "38.1 kB",
    time: "0.15ms",
    lazy: manual,
  },
  { lib: "lingui", size: "12.8 kB", time: "0.08ms", lazy: yes1 },
  {
    lib: "typesafe-i18n",
    size: "5.2 kB",
    time: "0.05ms",
    lazy: "Built-in",
  },
];
</script>

<template>
  <section>
    <h2 class="mb-6 text-2xl font-bold text-foreground">
      {{ title }}
    </h2>
    <div class="overflow-x-auto rounded-lg border border-border">
      <table class="w-full text-sm">
        <thead class="bg-muted">
          <tr>
            <th class="px-4 py-3 text-left font-medium text-muted-foreground">
              {{ columns.library }}
            </th>
            <th class="px-4 py-3 text-left font-medium text-muted-foreground">
              {{ columns.bundleSize }}
            </th>
            <th class="px-4 py-3 text-left font-medium text-muted-foreground">
              {{ columns.lookupTime }}
            </th>
            <th class="px-4 py-3 text-left font-medium text-muted-foreground">
              {{ columns.lazyLoading }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="r in results" :key="r.lib" class="border-t border-border">
            <td class="px-4 py-3 font-medium text-foreground">
              {{ r.lib }}
            </td>
            <td class="px-4 py-3 text-muted-foreground">{{ r.size }}</td>
            <td class="px-4 py-3 text-muted-foreground">{{ r.time }}</td>
            <td class="px-4 py-3 text-muted-foreground">{{ r.lazy }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>
