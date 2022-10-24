<script setup lang="ts">
import { Article } from "@/interfaces";

interface MyArticleProps {
  article: Article;
}
const props = defineProps<MyArticleProps>()
const { subtitle, id, imageUrl, title } = props.article
</script>

<template>
  <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6 card-wrapper">
    <article class="card">
      <img :src="imageUrl" class="card-img top-panel-image" />
      <div class="card-img-overlay d-flex flex-column">
        <div class="h-50"></div>
        <div class="h-50 d-flex flex-column justify-content-center align-items-center my-card-content">
          <p class="card-subtitle text-light text-uppercase">{{ subtitle }}</p>
          <h3 class="h3 text-light">{{ title }}</h3>
          <NuxtLink :to="`/blogs/${title}`" class="btn btn-outline-light">Read More</NuxtLink>
        </div>
      </div>
    </article>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/scss/variables";

.btn {
  margin-top: 1rem;
}

.my-card-content p, 
.my-card-content h3, 
.my-card-content div {
  margin: 1rem 0;
}

.card-img-overlay {
  border-radius: 0;
}

.card {
  --bs-card-border-radius: 0;
  --bs-card-inner-border-radius: 0;
}

.top-panel-image {
  width: 100%;
  height: auto;
  max-height: 46rem;
}

@media (max-width: $small) {
  .card-wrapper {
    padding: 5 + $gutter * 0.5;
  }
  .card {
    margin: 0 auto;
    max-width: 100%;
  }
  .top-panel-image {
    max-height: auto;
  }
}

@media (max-width: $xl-large) {
  .h3 {
    font-size: calc(0.9rem + .6vw);
  }
}
</style>
