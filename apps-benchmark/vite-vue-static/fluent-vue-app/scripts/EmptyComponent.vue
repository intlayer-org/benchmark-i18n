<script setup lang="ts">
import { getCurrentInstance } from "vue";
import { useFluent } from "fluent-vue";

const fluent = useFluent();
const proxy = getCurrentInstance()?.proxy as
  | { $t: (key: string) => string }
  | null;
const value = proxy?.$t("header-home");
void fluent;
void value;
</script>

<template></template>
