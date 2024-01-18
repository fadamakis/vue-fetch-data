<script setup lang="ts">
import { ref } from "vue";
import useArticles from "@/features/articles/composables/useArticles";

const articles = ref();
articles.value = await useArticles().fetchLatestArticles();

</script>

<template>
  <section>
    <h3>Related articles:</h3>
    <ul>
      <li v-for="article in articles.items.slice(1)" :key="article.title">
        <a target="_blank" :href="article.link">{{ article.title }}</a>
      </li>
    </ul>
  </section>
</template>

<style>
section {
  text-align: left;
}
</style>
