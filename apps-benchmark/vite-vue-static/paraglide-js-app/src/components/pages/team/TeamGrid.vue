<script setup lang="ts">
import { m } from "../../../paraglide/messages.js";

// Explicit calls keep every message tree-shakable (no m[key] lookups); the
// tree remounts on a locale switch (Layout :key), so setup-time values are fresh.
const members = [
  {
    name: m.team_grid_member1Name(),
    role: m.team_grid_member1Role(),
    bio: m.team_grid_member1Bio(),
  },
  {
    name: m.team_grid_member2Name(),
    role: m.team_grid_member2Role(),
    bio: m.team_grid_member2Bio(),
  },
  {
    name: m.team_grid_member3Name(),
    role: m.team_grid_member3Role(),
    bio: m.team_grid_member3Bio(),
  },
  {
    name: m.team_grid_member4Name(),
    role: m.team_grid_member4Role(),
    bio: m.team_grid_member4Bio(),
  },
  {
    name: m.team_grid_member5Name(),
    role: m.team_grid_member5Role(),
    bio: m.team_grid_member5Bio(),
  },
  {
    name: m.team_grid_member6Name(),
    role: m.team_grid_member6Role(),
    bio: m.team_grid_member6Bio(),
  },
];

const getInitials = (name: string) =>
  name
    .split(" ")
    .map((n) => n[0])
    .join("");
</script>

<template>
  <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
    <div
      v-for="member in members"
      :key="member.name"
      class="rounded-lg border border-border bg-card p-6 text-center"
    >
      <div class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent text-lg font-bold text-accent-foreground">
        {{ getInitials(member.name) }}
      </div>
      <h3 class="text-base font-semibold text-foreground">{{ member.name }}</h3>
      <p class="mb-2 text-xs font-medium text-primary">{{ member.role }}</p>
      <p class="text-sm text-muted-foreground">{{ member.bio }}</p>
    </div>
  </div>
</template>
