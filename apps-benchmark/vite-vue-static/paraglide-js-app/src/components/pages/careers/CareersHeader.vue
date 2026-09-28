<script setup lang="ts">
import MockBanner from "../../MockBanner.vue";
import { m } from "../../../paraglide/messages.js";
</script>

<template>
  <MockBanner />
  <h1 class="mb-2 text-3xl font-bold text-foreground">
    {{ m.careers_header_title() }}
  </h1>
  <p class="mb-4 text-muted-foreground">{{ m.careers_header_description() }}</p>
</template>
