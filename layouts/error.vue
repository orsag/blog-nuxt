<script setup lang="ts">
  import { createImgURL } from "@/helpers";

  const icon = createImgURL('free-sad-face-icon.png');
</script>

<template>
  <div class="d-flex flex-column justify-content-center align-items-center">
    <slot name="header"></slot>
    <div>
      <img
        :src="icon"
        alt="sad-face"
      />
    </div>
    <slot name="redirectEl" />
  </div>
</template>

<style scoped>
img {
  width: 10rem;
  margin: 2rem;
}
</style>