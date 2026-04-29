<script setup lang="ts">
import { useIntlayer } from "vue-intlayer";

const { title, applyNow, openings } = useIntlayer("open-positions");
</script>

<template>
  <h2 class="mb-6 text-2xl font-bold text-foreground">
    {{ title }}
  </h2>
  <div class="space-y-4">
    <div
      v-for="o in openings"
      :key="o.title"
      class="flex flex-col gap-3 rounded-lg border border-border bg-card p-6 md:flex-row md:items-center md:justify-between"
    >
      <div>
        <h3 class="text-base font-semibold text-foreground">
          {{ o.title }}
        </h3>
        <p class="text-sm text-muted-foreground">{{ o.desc }}</p>
        <div class="mt-2 flex gap-2">
          <span class="rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground">
            {{ o.dept }}
          </span>
          <span class="rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground">
            {{ o.location }}
          </span>
          <span class="rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground">
            {{ o.type }}
          </span>
        </div>
      </div>
      <button
        type="button"
        class="shrink-0 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
      >
        {{ applyNow }}
      </button>
    </div>
  </div>
</template>
