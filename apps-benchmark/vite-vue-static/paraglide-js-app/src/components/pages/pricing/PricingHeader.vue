<script setup lang="ts">
import { m } from "../../../paraglide/messages.js";
import MockBanner from "../../MockBanner.vue";
</script>

<template>
  <MockBanner />
  <div class="mb-12 text-center">
    <h1 class="mb-3 text-3xl font-bold text-foreground">
      {{ m.pricing_header_title() }}
    </h1>
    <p class="text-muted-foreground">
      {{ m.pricing_header_description() }}
    </p>
  </div>
</template>
