<script setup lang="ts">
import { computed } from "vue";
import { useIntlayer } from "vue-intlayer";

const {
  starterName,
  starterPrice,
  starterPeriod,
  starterFeatures,
  proName,
  proPrice,
  proPeriod,
  proFeatures,
  enterpriseName,
  enterprisePrice,
  enterprisePeriod,
  enterpriseFeatures,
  contactSales,
  getStarted,
} = useIntlayer("pricing-tiers");

const tiers = computed(() => [
  {
    name: starterName.value,
    price: starterPrice.value,
    period: starterPeriod.value,
    features: starterFeatures.value,
  },
  {
    name: proName.value,
    price: proPrice.value,
    period: proPeriod.value,
    features: proFeatures.value,
    highlighted: true,
  },
  {
    name: enterpriseName.value,
    price: enterprisePrice.value,
    period: enterprisePeriod.value,
    features: enterpriseFeatures.value,
  },
]);
</script>

<template>
  <div class="grid gap-6 md:grid-cols-3">
    <div
      v-for="t in tiers"
      :key="t.name"
      :class="[
        'flex flex-col rounded-lg border p-6',
        t.highlighted
          ? 'border-primary bg-primary/5 ring-1 ring-primary'
          : 'border-border bg-card'
      ]"
    >
      <h3 class="text-lg font-semibold text-foreground">{{ t.name }}</h3>
      <div class="my-4">
        <span class="text-3xl font-bold text-foreground">{{ t.price }}</span>
        <span class="text-sm text-muted-foreground">{{ t.period }}</span>
      </div>
      <ul class="mb-6 flex-1 space-y-2">
        <li
          v-for="f in t.features"
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
          t.highlighted
            ? 'bg-primary text-primary-foreground'
            : 'border border-border text-foreground hover:bg-accent'
        ]"
      >
        {{ t.name === enterpriseName ? contactSales : getStarted }}
      </button>
    </div>
  </div>
</template>
