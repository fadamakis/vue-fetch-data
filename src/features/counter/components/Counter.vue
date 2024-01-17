<script setup lang="ts">
import { ref } from "vue";
import { useAppSettings } from "@/features/appSettings/composables/useAppSettings";

const { appSettings } = useAppSettings();

const count = ref(appSettings.value.INITIAL_COUNTER ?? 0);
</script>

<template>
  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>