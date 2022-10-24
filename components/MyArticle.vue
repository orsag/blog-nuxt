<script setup lang="ts">
import { Article } from "@/interfaces";
import { createImgURL } from "@/helpers";

interface MyArticleProps {
  article: Article;
}
const props = defineProps<MyArticleProps>();
const { subtitle, id, imageUrl, title, content } = props.article;

const image = createImgURL(imageUrl);
</script>

<template>
  <article class="card">
    <img :src="image" class="card-img-top pb-3" />
    <div class="card-body">
      <p class="card-subtitle text-muted text-uppercase">{{ subtitle }}</p>
      <h3 class="h3">{{ title }}</h3>
      <hr class="mx-auto" />

      <div class="card-text">
        {{ content }}
      </div>

      <div class="nuxtLink">
        <NuxtLink class="text-muted text-primary" :to="`/blogs/${title}`"
          >Read More</NuxtLink
        >
      </div>
    </div>
  </article>
</template>

<style scoped>
.card {
  border: none;
}
.nuxtLink {
  padding-top: 2rem;
}
a:not([class*="btn"]) {
  text-decoration: none;
}
a:not([class*="btn"]):hover {
  text-decoration: underline;
}
hr {
  width: 30%;
  margin: 1.6rem 0;
  border-top: 2px solid;
}
</style>
