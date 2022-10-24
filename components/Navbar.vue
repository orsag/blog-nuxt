<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">BLOG</a>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <NuxtLink class="nav-link active" aria-current="page" href="/">Home</NuxtLink>
        </li>
        <li class="nav-item">
          <NuxtLink class="nav-link" href="/blogs">Listing</NuxtLink>
        </li>
        <li class="nav-item">
          <NuxtLink class="nav-link" href="/contact">Contact</NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<style scoped>
.ml-auto {
  margin-left: auto;
}
</style>