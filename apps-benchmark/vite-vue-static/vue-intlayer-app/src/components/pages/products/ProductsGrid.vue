<script setup lang="ts">
import { useIntlayer } from "vue-intlayer";

const { learnMore, products } = useIntlayer("products-grid");
</script>

<template>
  <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
    <div
      v-for="p in products"
      :key="p.name"
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
          {{ learnMore }}
        </button>
      </div>
    </div>
  </div>
</template>
