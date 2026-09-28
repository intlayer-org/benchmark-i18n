<script setup lang="ts">
import MockBanner from "../../MockBanner.vue";
import { useFluentDottedT } from "../../../i18n/useFluentDottedT";

const { td } = useFluentDottedT();
</script>

<template>
  <MockBanner />
  <h1 class="mb-2 text-3xl font-bold text-foreground">
    {{ td("blog.header.title") }}
  </h1>
  <p class="mb-10 text-muted-foreground">{{ td("blog.header.description") }}</p>
</template>
