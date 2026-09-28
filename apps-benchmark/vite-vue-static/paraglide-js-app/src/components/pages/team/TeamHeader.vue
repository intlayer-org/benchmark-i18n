<script setup lang="ts">
import { m } from "../../../paraglide/messages.js";
import MockBanner from "../../MockBanner.vue";
</script>

<template>
  <MockBanner />
  <h1 class="mb-2 text-3xl font-bold text-foreground">
    {{ m.team_header_title() }}
  </h1>
  <p class="mb-10 text-muted-foreground">
    {{ m.team_header_description() }}
  </p>
</template>
