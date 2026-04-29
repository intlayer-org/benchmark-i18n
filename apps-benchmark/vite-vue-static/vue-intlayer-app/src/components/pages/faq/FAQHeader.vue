<script setup lang="ts">
import { useIntlayer } from "vue-intlayer";
import MockBanner from "../../MockBanner.vue";

const { title, description } = useIntlayer("faq-header");
</script>

<template>
  <MockBanner />
  <h1 class="mb-2 text-3xl font-bold text-foreground">
    {{ title }}
  </h1>
  <p class="mb-10 text-muted-foreground">
    {{ description }}
  </p>
</template>
