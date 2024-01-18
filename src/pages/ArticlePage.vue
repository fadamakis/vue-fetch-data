<script setup lang="ts">
import Article from "@/features/articles/components/Article.vue";
import RelatedArticles from "@/features/articles/components/RelatedArticles.vue";
</script>

<template>
  <Suspense>
    <main>
      <Article />
      <RelatedArticles />
    </main>
    <template #fallback> Loading... </template>
  </Suspense>
</template>
