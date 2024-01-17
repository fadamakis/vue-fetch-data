<script setup lang="ts">
import { useToggles } from "@/features/toggles/composables/useToggles";

const { toggles } = useToggles();
</script>

<template>
  <ul class="feature-list">
    <li v-for="(value, key) in toggles" :key="key">
      <span :class="{ disabled: !value }"> {{ key }}: {{ value }} </span>
    </li>
  </ul>
</template>
<style>
.feature-list {
  list-style-type: none;
  padding: 0;
  margin: 0;
  width: 100%;
  border: 1px solid #ccc;
  margin: 20px 0;
  text-align: left;
}

.feature-list li {
  padding: 15px;
  background-color: #f9f9f9;
  color: green;
  font-weight: 600;
}

.feature-list li:nth-child(odd) {
  background-color: #e9e9e9;
}

.disabled {
  color: red;
}
</style>
