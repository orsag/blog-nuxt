<script setup lang="ts">
import { PARAGRAPH1, PARAGRAPH2, PARAGRAPH3, PARAGRAPH4 } from "@/constants";
import { createImgURL } from "@/helpers";
import articles from "@/data.json";

const route = useRoute();
const name = route.params.name;
const blog = articles.find((r) => r.title === name);
const detailImage1 = createImgURL("detail1.webp");
const detailImage2 = createImgURL("detail2.webp");

useHead({
  title: blog ? name as string : "Not Found"
});
</script>

<template>
  <div>
    <div v-if="blog">
      <div class="container-fluid">
        <div
          class="detail-top-bar row d-flex align-items-center"
        > 
          <div class="col-auto offset-sm-1">
            <div class="detail-header">{{ name }}</div>
          </div>
        </div>
      </div>

      <div class="container">
        <img :src="detailImage1" class="img-fluid detail-image" alt="flowers" />
        <div class="row">
          <div class="col-12 text-start">
            <p>{{ PARAGRAPH1 }}</p>
            <p>{{ PARAGRAPH2 }}</p>
            <div class="alert alert-warning detail-alert-text">
              <p>{{ PARAGRAPH3 }}</p>
            </div>
            <img
              :src="detailImage2"
              class="img-fluid detail-image"
              alt="flowers"
            />
            <p>{{ PARAGRAPH4 }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="detail-not-found" v-else>
      <NuxtLayout name="error">
        <template #header>
          <h1>Blog not found</h1>
        </template>
        <template #redirectEl>
          <button class="btn btn-primary" @click="$router.push('/blogs')">
            Go to Listing
          </button>
        </template>
      </NuxtLayout>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/scss/variables";
.container {
  text-align: center;
}

.detail-header {
  display: inline-block;
  font-size: 1.75rem;
  font-weight: bold;
}
.detail-top-bar {
  background: rgb(255, 211, 211);
  text-align: start;
  height: 10rem;
}
.detail-image {
  max-height: 22rem;
  width: 100%;
  object-fit: cover;
  margin: 1rem 0;
}
.detail-content {
  text-align: start;
}
.detail-alert-text {
  color: #000;
  font-weight: bold;
  font-style: italic;
}
.detail-not-found {
  height: 75vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

@media (max-width: $small) {
  .detail-top-bar {
    height: 5rem;
  }
  .detail-header {
      font-size: 1.25rem;
  }
}
</style>
