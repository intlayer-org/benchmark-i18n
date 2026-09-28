<script setup lang="ts">
import { computed } from "vue";
import { useFluentDottedT } from "../../../i18n/useFluentDottedT";

const { td } = useFluentDottedT();

const postIndices = [1, 2, 3, 4, 5, 6] as const;

const posts = computed(() =>
  postIndices.map((i) => ({
    title: td(`blog.list.post${i}Title`),
    date: td(`blog.list.post${i}Date`),
    excerpt: td(`blog.list.post${i}Excerpt`),
    category: td(`blog.list.post${i}Category`),
  })),
);
</script>

<template>
  <div class="grid gap-6 md:grid-cols-2">
    <article
      v-for="p in posts"
      :key="p.title"
      class="rounded-lg border border-border bg-card p-6"
    >
      <div class="mb-3 flex items-center gap-3">
        <span
          class="rounded-full bg-accent px-3 py-0.5 text-xs font-medium text-accent-foreground"
        >
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
        {{ td("blog.list.readMore") }}
      </button>
    </article>
  </div>
</template>
