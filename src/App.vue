<script setup lang="ts">
import Counter from "@/features/counter/components/Counter.vue";
import Intro from "@/components/Intro.vue";
import ProfileInfo from '@/features/auth/components/ProfileInfo.vue'
import Features from '@/features/toggles/components/Features.vue'
</script>

<template>
  <Intro />
  <Counter />
  <ProfileInfo />
  <Features />
</template>
