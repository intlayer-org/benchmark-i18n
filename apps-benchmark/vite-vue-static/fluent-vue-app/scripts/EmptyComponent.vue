<script setup lang="ts">
import { useFluent } from "fluent-vue";
const { $t } = useFluent();
</script>

<template>
  <div>{{ $t("header-home") }}</div>
</template>
