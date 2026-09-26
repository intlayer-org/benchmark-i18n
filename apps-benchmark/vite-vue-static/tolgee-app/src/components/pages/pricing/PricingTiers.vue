<script setup lang="ts">
import { useT } from "../../../i18n";

const { t } = useT();

const tiers = [
  {
    nameKey: "starterName",
    priceKey: "starterPrice",
    periodKey: "starterPeriod",
    features: ["starterFeature1", "starterFeature2", "starterFeature3", "starterFeature4"],
  },
  {
    nameKey: "proName",
    priceKey: "proPrice",
    periodKey: "proPeriod",
    features: ["proFeature1", "proFeature2", "proFeature3", "proFeature4", "proFeature5", "proFeature6"],
    highlighted: true,
  },
  {
    nameKey: "enterpriseName",
    priceKey: "enterprisePrice",
    periodKey: null,
    features: [
      "enterpriseFeature1",
      "enterpriseFeature2",
      "enterpriseFeature3",
      "enterpriseFeature4",
      "enterpriseFeature5",
      "enterpriseFeature6",
      "enterpriseFeature7",
    ],
  },
];
</script>

<template>
  <div class="grid gap-6 md:grid-cols-3">
    <div
      v-for="tier in tiers"
      :key="tier.nameKey"
      :class="[
        'flex flex-col rounded-lg border p-6',
        tier.highlighted
          ? 'border-primary bg-primary/5 ring-1 ring-primary'
          : 'border-border bg-card'
      ]"
    >
      <h3 class="text-lg font-semibold text-foreground">{{ t(`pricing.tiers.${tier.nameKey}`) }}</h3>
      <div class="my-4">
        <span class="text-3xl font-bold text-foreground">{{ t(`pricing.tiers.${tier.priceKey}`) }}</span>
        <span class="text-sm text-muted-foreground">{{ tier.periodKey ? t(`pricing.tiers.${tier.periodKey}`) : "" }}</span>
      </div>
      <ul class="mb-6 flex-1 space-y-2">
        <li
          v-for="f in tier.features"
          :key="f"
          class="flex items-center gap-2 text-sm text-muted-foreground"
        >
          <span class="text-primary">✓</span> {{ t(`pricing.tiers.${f}`) }}
        </li>
      </ul>
      <button
        type="button"
        :class="[
          'w-full rounded-md px-4 py-2 text-sm font-medium transition-opacity hover:opacity-90',
          tier.highlighted
            ? 'bg-primary text-primary-foreground'
            : 'border border-border text-foreground hover:bg-accent'
        ]"
      >
        {{ tier.nameKey === "enterpriseName" ? t("pricing.tiers.contactSales") : t("pricing.tiers.getStarted") }}
      </button>
    </div>
  </div>
</template>
