<script setup lang="ts">
import { useIntlayer } from 'vue-intlayer';
const content = useIntlayer('blog-header');

import MockBanner from "../../MockBanner.vue";
</script>

<template>
  <MockBanner />
  <h1 class="mb-2 text-3xl font-bold text-foreground">{{ content.blog }}</h1>
  <p class="mb-10 text-muted-foreground">{{ content.insightsTutorialsAndAnalysisFrom }}</p>
</template>
