<script setup lang="ts">
import MasonryWall from "@yeger/vue-masonry-wall";
import articles from "@/data.json";

const scrollContainer = ref(null);
</script>

<template>
  <div>
    <div class="container">
      <div class="root">
        <main ref="scrollContainer" class="scroll-container">
          <masonry-wall
            :items="articles"
            :column-width="400"
            :gap="20"
            :scroll-container="scrollContainer"
          >
            <template #default="{ item, index }">
              <my-article :key="item.id" :article="item" />
            </template>
          </masonry-wall>
        </main>
      </div>
    </div>
  </div>
</template>

<style scoped>
.root {
  text-align: center;
  margin-top: 2rem;
}
.scroll-container {
  overflow-y: auto;
}
</style>
