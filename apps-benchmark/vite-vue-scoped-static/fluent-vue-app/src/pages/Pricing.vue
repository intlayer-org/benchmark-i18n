<script setup lang="ts">
import { defineAsyncComponent } from "vue";
import { useNamespace } from "../i18n";

useNamespace(
  import.meta.glob<string>("../locales/*/pricing.ftl", {
    eager: true,
    query: "?raw",
    import: "default",
  }),
);

const PricingHeader = defineAsyncComponent(
  () => import("../components/pages/pricing/PricingHeader.vue")
);
const PricingTiers = defineAsyncComponent(
  () => import("../components/pages/pricing/PricingTiers.vue")
);
</script>

<template>
  <div class="container py-16">
    <Suspense>
      <PricingHeader />
      <template #fallback>
        <div class="h-48 animate-pulse bg-muted/20" />
      </template>
    </Suspense>

    <Suspense>
      <PricingTiers />
      <template #fallback>
        <div class="h-96 animate-pulse bg-muted/20" />
      </template>
    </Suspense>
  </div>
</template>
