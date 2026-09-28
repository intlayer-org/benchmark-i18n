<script setup lang="ts">
import { m } from "../../../paraglide/messages.js";

// Explicit calls keep every message tree-shakable (no m[key] lookups); the
// tree remounts on a locale switch (Layout :key), so setup-time values are fresh.
const openings = [
  {
    title: m.careers_openPositions_frontendTitle(),
    desc: m.careers_openPositions_frontendDesc(),
    dept: m.careers_openPositions_engineering(),
    location: m.careers_openPositions_remote(),
    type: m.careers_openPositions_fullTime(),
  },
  {
    title: m.careers_openPositions_backendTitle(),
    desc: m.careers_openPositions_backendDesc(),
    dept: m.careers_openPositions_engineering(),
    location: m.careers_openPositions_remote(),
    type: m.careers_openPositions_fullTime(),
  },
  {
    title: m.careers_openPositions_writerTitle(),
    desc: m.careers_openPositions_writerDesc(),
    dept: m.careers_openPositions_documentation(),
    location: m.careers_openPositions_remote(),
    type: m.careers_openPositions_partTime(),
  },
  {
    title: m.careers_openPositions_devrelTitle(),
    desc: m.careers_openPositions_devrelDesc(),
    dept: m.careers_openPositions_community(),
    location: m.careers_openPositions_sfRemote(),
    type: m.careers_openPositions_fullTime(),
  },
  {
    title: m.careers_openPositions_qaTitle(),
    desc: m.careers_openPositions_qaDesc(),
    dept: m.careers_openPositions_engineering(),
    location: m.careers_openPositions_remote(),
    type: m.careers_openPositions_fullTime(),
  },
];
</script>

<template>
  <h2 class="mb-6 text-2xl font-bold text-foreground">
    {{ m.careers_openPositions_title() }}
  </h2>
  <div class="space-y-4">
    <div
      v-for="(o, i) in openings"
      :key="`${o.title}-${i}`"
      class="flex flex-col gap-3 rounded-lg border border-border bg-card p-6 md:flex-row md:items-center md:justify-between"
    >
      <div>
        <h3 class="text-base font-semibold text-foreground">
          {{ o.title }}
        </h3>
        <p class="text-sm text-muted-foreground">
          {{ o.desc }}
        </p>
        <div class="mt-2 flex gap-2">
          <span
            class="rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground"
          >
            {{ o.dept }}
          </span>
          <span
            class="rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground"
          >
            {{ o.location }}
          </span>
          <span
            class="rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground"
          >
            {{ o.type }}
          </span>
        </div>
      </div>
      <button
        type="button"
        class="shrink-0 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
      >
        {{ m.careers_openPositions_applyNow() }}
      </button>
    </div>
  </div>
</template>
