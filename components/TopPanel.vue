<script setup lang="ts">
import TopPanelArticle from "@/components/TopPanelArticle.vue"
import articles from "@/dataTop.json"

const selectedArticles = articles.slice(0, 4)
</script>

<template>
  <div class="w-100">
    <div class="row g-1 align-items-center justify-content-center">
      <TopPanelArticle
        v-for="article in selectedArticles"
        :key="article.id"
        :article="article"
      />
    </div>
  </div>
</template>
