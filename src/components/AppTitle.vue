<!-- =========================================================================
/// <summary>
/// AppTitle.vue
/// vue-shoƥer
/// created by Mehrdad Soleimanimajd on 30.11.2023
/// </summary>
/// <created>ʆϒʅ, 30.11.2023</created>
/// <changed>ʆϒʅ, 04.12.2023</changed>
========================================================================== -->

<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <div class="app-title">
    <h1 class="green">{{ title }}</h1>
    <h4>Welcome to most beautiful shop all around.</h4>
    <br />
    <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
    <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>.
    <p>Next is shopping ...</p>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1rem;
}

.app-title {
  text-align: center;
}

@media (min-width: 1024px) {
  .app-title h1,
  .app-title h3 {
    text-align: left;
  }
}
</style>
