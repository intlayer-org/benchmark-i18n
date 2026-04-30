<script setup lang="ts">
import { useIntlayer } from "vue-intlayer";

const { readMore, posts } = useIntlayer("blog-list");
</script>

<template>
  <div class="grid gap-6 md:grid-cols-2">
    <article
      v-for="p in posts"
      :key="p.title"
      class="rounded-lg border border-border bg-card p-6"
    >
      <div class="mb-3 flex items-center gap-3">
        <span class="rounded-full bg-accent px-3 py-0.5 text-xs font-medium text-accent-foreground">
          {{ p.category }}
        </span>
        <span class="text-xs text-muted-foreground">{{ p.date }}</span>
      </div>
      <h2 class="mb-2 text-lg font-semibold text-foreground">
        {{ p.title }}
      </h2>
      <p class="mb-4 text-sm text-muted-foreground">{{ p.excerpt }}</p>
      <button
        type="button"
        class="text-sm font-medium text-primary hover:underline"
      >
        {{ readMore }}
      </button>
    </article>
  </div>
</template>
