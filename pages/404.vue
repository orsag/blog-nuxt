<script setup lang="ts">
  import { createImgURL } from "@/helpers";

  const icon = createImgURL('free-sad-face-icon.png');
</script>

<template>
  <div class="d-flex flex-column justify-content-center align-items-center">
    <div name="header">Page not found</div>
    <div>
      <img
        :src="icon"
        alt="sad face"
      />
    </div>
    <NuxtLink class="text-muted text-primary" :to="`/blogs`">
      Go to listing
    </NuxtLink>
  </div>
</template>

<style scoped>
img {
  width: 10rem;
  margin: 2rem;
}
</style>