<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const memberIndices = [1, 2, 3, 4, 5, 6];

const getInitials = (name: string) =>
  name
    .split(" ")
    .map((n) => n[0])
    .join("");
</script>

<template>
  <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
    <div
      v-for="i in memberIndices"
      :key="i"
      class="rounded-lg border border-border bg-card p-6 text-center"
    >
      <div class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent text-lg font-bold text-accent-foreground">
        {{ getInitials(t(`team.grid.member${i}Name`)) }}
      </div>
      <h3 class="text-base font-semibold text-foreground">{{ t(`team.grid.member${i}Name`) }}</h3>
      <p class="mb-2 text-xs font-medium text-primary">{{ t(`team.grid.member${i}Role`) }}</p>
      <p class="text-sm text-muted-foreground">{{ t(`team.grid.member${i}Bio`) }}</p>
    </div>
  </div>
</template>
