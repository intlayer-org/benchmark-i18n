<script setup lang="ts">
import { computed } from "vue";
import { useFluentDottedT } from "../../../i18n/useFluentDottedT";

const { td } = useFluentDottedT();

const memberIndices = [1, 2, 3, 4, 5, 6] as const;

const members = computed(() =>
  memberIndices.map((i) => ({
    name: td(`team.grid.member${i}Name`),
    role: td(`team.grid.member${i}Role`),
    bio: td(`team.grid.member${i}Bio`),
  })),
);

const getInitials = (name: string) =>
  name
    .split(" ")
    .map((n) => n[0])
    .join("");
</script>

<template>
  <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
    <div
      v-for="m in members"
      :key="m.name"
      class="rounded-lg border border-border bg-card p-6 text-center"
    >
      <div
        class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent text-lg font-bold text-accent-foreground"
      >
        {{ getInitials(m.name) }}
      </div>
      <h3 class="text-base font-semibold text-foreground">{{ m.name }}</h3>
      <p class="mb-2 text-xs font-medium text-primary">{{ m.role }}</p>
      <p class="text-sm text-muted-foreground">{{ m.bio }}</p>
    </div>
  </div>
</template>
