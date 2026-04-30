<script setup lang="ts">
import { useIntlayer } from "vue-intlayer";

const { faqs } = useIntlayer("faq-list");
</script>

<template>
  <div class="mx-auto max-w-3xl space-y-4">
    <details
      v-for="f in faqs"
      :key="f.q"
      class="group rounded-lg border border-border bg-card"
    >
      <summary class="cursor-pointer px-6 py-4 text-sm font-medium text-foreground hover:bg-accent/50 transition-colors">
        {{ f.q }}
      </summary>
      <p class="px-6 pb-4 text-sm text-muted-foreground">{{ f.a }}</p>
    </details>
  </div>
</template>
