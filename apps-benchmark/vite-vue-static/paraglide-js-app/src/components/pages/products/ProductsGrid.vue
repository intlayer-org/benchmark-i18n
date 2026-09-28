<script setup lang="ts">
import { m } from "../../../paraglide/messages.js";

// Explicit calls keep every message tree-shakable (no m[key] lookups); the
// tree remounts on a locale switch (Layout :key), so setup-time values are fresh.
const products = [
  {
    id: "cli",
    name: m.products_grid_cliName(),
    desc: m.products_grid_cliDesc(),
    price: m.products_grid_cliPrice(),
  },
  {
    id: "cloud",
    name: m.products_grid_cloudName(),
    desc: m.products_grid_cloudDesc(),
    price: m.products_grid_cloudPrice(),
  },
  {
    id: "enterprise",
    name: m.products_grid_enterpriseName(),
    desc: m.products_grid_enterpriseDesc(),
    price: m.products_grid_enterprisePrice(),
  },
  {
    id: "migration",
    name: m.products_grid_migrationName(),
    desc: m.products_grid_migrationDesc(),
    price: m.products_grid_migrationPrice(),
  },
  {
    id: "qa",
    name: m.products_grid_qaName(),
    desc: m.products_grid_qaDesc(),
    price: m.products_grid_qaPrice(),
  },
  {
    id: "optimizer",
    name: m.products_grid_optimizerName(),
    desc: m.products_grid_optimizerDesc(),
    price: m.products_grid_optimizerPrice(),
  },
];
</script>

<template>
  <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
    <div
      v-for="p in products"
      :key="p.id"
      class="flex flex-col justify-between rounded-lg border border-border bg-card p-6"
    >
      <div>
        <h3 class="mb-2 text-lg font-semibold text-foreground">
          {{ p.name }}
        </h3>
        <p class="mb-4 text-sm text-muted-foreground">{{ p.desc }}</p>
      </div>
      <div class="flex items-center justify-between">
        <span class="text-sm font-bold text-primary">{{ p.price }}</span>
        <button
          type="button"
          class="rounded-md bg-primary px-4 py-2 text-xs font-medium text-primary-foreground hover:opacity-90 transition-opacity"
        >
          {{ m.products_grid_learnMore() }}
        </button>
      </div>
    </div>
  </div>
</template>
