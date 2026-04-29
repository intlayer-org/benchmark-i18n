<script setup lang="ts">
import { useIntlayer } from "vue-intlayer";
const { title, description, returnHome } = useIntlayer("not-found");
</script>

<template>
  <div class="flex min-h-[60vh] items-center justify-center bg-muted/30">
    <div class="text-center">
      <h1 class="mb-4 text-4xl font-bold">{{ title }}</h1>
      <p class="mb-4 text-xl text-muted-foreground">
        {{ description }}
      </p>
      <router-link
        to="/en"
        class="text-primary underline hover:text-primary/90"
      >
        {{ returnHome }}
      </router-link>
    </div>
  </div>
</template>
