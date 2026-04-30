<script setup lang="ts">
import MockBanner from "../../MockBanner.vue";
import { useFluentDottedT } from "../../../i18n/useFluentDottedT";

const { td } = useFluentDottedT();
</script>

<template>
  <MockBanner />
  <div class="mb-12 text-center">
    <h1 class="mb-3 text-3xl font-bold text-foreground">
      {{ td("pricing.header.title") }}
    </h1>
    <p class="text-muted-foreground">
      {{ td("pricing.header.description") }}
    </p>
  </div>
</template>
