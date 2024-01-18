<script setup lang="ts">
import { ref } from "vue";
import useArticles from "@/features/articles/composables/useArticles";

const article = ref();
article.value = await useArticles().fetchLatestArticle();
</script>

<template>
  <article v-html="article.description" />
</template>


<style>
  article {
    text-align: left;
    max-width: 760px;
  }
  article img {
    max-width: 100%;
  }
</style>