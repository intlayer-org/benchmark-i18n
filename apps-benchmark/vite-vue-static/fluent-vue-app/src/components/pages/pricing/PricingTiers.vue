<script setup lang="ts">
import { computed } from "vue";
import { useFluentDottedT } from "../../../i18n/useFluentDottedT";

const { td } = useFluentDottedT();

const tierDefs = [
  {
    id: "starter" as const,
    featureNums: [1, 2, 3, 4] as const,
    highlighted: false,
  },
  {
    id: "pro" as const,
    featureNums: [1, 2, 3, 4, 5, 6] as const,
    highlighted: true,
  },
  {
    id: "enterprise" as const,
    featureNums: [1, 2, 3, 4, 5, 6, 7] as const,
    highlighted: false,
  },
] as const;

const tiers = computed(() =>
  tierDefs.map((def) => ({
    id: def.id,
    highlighted: def.highlighted,
    name: td(`pricing.tiers.${def.id}.name`),
    price: td(`pricing.tiers.${def.id}.price`),
    period:
      def.id === "enterprise"
        ? ""
        : td(`pricing.tiers.${def.id}.period`),
    features: def.featureNums.map((n) =>
      td(`pricing.tiers.${def.id}.feature${n}`),
    ),
    cta:
      def.id === "enterprise"
        ? td("pricing.tiers.contactSales")
        : td("pricing.tiers.getStarted"),
  })),
);
</script>

<template>
  <div class="grid gap-6 md:grid-cols-3">
    <div
      v-for="tier in tiers"
      :key="tier.id"
      :class="[
        'flex flex-col rounded-lg border p-6',
        tier.highlighted
          ? 'border-primary bg-primary/5 ring-1 ring-primary'
          : 'border-border bg-card',
      ]"
    >
      <h3 class="text-lg font-semibold text-foreground">{{ tier.name }}</h3>
      <div class="my-4">
        <span class="text-3xl font-bold text-foreground">{{ tier.price }}</span>
        <span class="text-sm text-muted-foreground">{{ tier.period }}</span>
      </div>
      <ul class="mb-6 flex-1 space-y-2">
        <li
          v-for="f in tier.features"
          :key="f"
          class="flex items-center gap-2 text-sm text-muted-foreground"
        >
          <span class="text-primary">✓</span> {{ f }}
        </li>
      </ul>
      <button
        type="button"
        :class="[
          'w-full rounded-md px-4 py-2 text-sm font-medium transition-opacity hover:opacity-90',
          tier.highlighted
            ? 'bg-primary text-primary-foreground'
            : 'border border-border text-foreground hover:bg-accent',
        ]"
      >
        {{ tier.cta }}
      </button>
    </div>
  </div>
</template>
