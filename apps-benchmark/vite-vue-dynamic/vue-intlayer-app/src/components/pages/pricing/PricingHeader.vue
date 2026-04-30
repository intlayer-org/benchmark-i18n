<script setup lang="ts">
import { useIntlayer } from "vue-intlayer";
import MockBanner from "../../MockBanner.vue";

const { title, description } = useIntlayer("pricing-header");
</script>

<template>
  <MockBanner />
  <div class="mb-12 text-center">
    <h1 class="mb-3 text-3xl font-bold text-foreground">
      {{ title }}
    </h1>
    <p class="text-muted-foreground">
      {{ description }}
    </p>
  </div>
</template>
