<script setup lang="ts">
import { defineAsyncComponent } from "vue";
import { useNamespace } from "../i18n";

useNamespace(
  "about",
  import.meta.glob<Record<string, unknown>>("../../locales/*/about.json", {
    eager: true,
    import: "default",
  }),
);

const AboutHeader = defineAsyncComponent(
  () => import("../components/pages/about/AboutHeader.vue")
);
const AboutGrid = defineAsyncComponent(() => import("../components/pages/about/AboutGrid.vue"));
const WhatWeMeasure = defineAsyncComponent(
  () => import("../components/pages/about/WhatWeMeasure.vue")
);
</script>

<template>
  <div class="container py-16">
    <Suspense>
      <AboutHeader />
      <template #fallback>
        <div class="h-48 animate-pulse bg-muted/20" />
      </template>
    </Suspense>

    <Suspense>
      <AboutGrid />
      <template #fallback>
        <div class="h-64 animate-pulse bg-muted/20" />
      </template>
    </Suspense>

    <Suspense>
      <WhatWeMeasure />
      <template #fallback>
        <div class="h-96 animate-pulse bg-muted/20" />
      </template>
    </Suspense>
  </div>
</template>
