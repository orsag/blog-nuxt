
<script setup lang="ts">
import MasonryWall from "@yeger/vue-masonry-wall";
import articles from "@/data.json";

</script>

<template>
  <div>
    <div class="container">
      <div class="row">
        <masonry-wall :items="articles" :column-width="300" :gap="20" class="col-12">
          <template #default="{ item, index }">
            <my-article
                :key="item.id"
                :article="item"
            />
          </template>
        </masonry-wall>
      </div>
    </div>
  </div>
</template>


<style scoped>
.container {
  text-align: center;
  margin-top: 5rem;
}
</style>