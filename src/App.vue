<!-- =========================================================================
/// <summary>
/// App.vue
/// vue-shoƥer
/// created by Mehrdad Soleimanimajd on 28.11.2023
/// </summary>
/// <created>ʆϒʅ, 28.11.2023</created>
/// <changed>ʆϒʅ, 01.12.2023</changed>
========================================================================== -->

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import AppTitle from './components/AppTitle.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <div class="shoper-logo">
        <img alt="Vue logo" class="logo w-14 h-14" src="@/assets/logo.svg" />
        <AppTitle title="Vue Shoƥer" />
      </div>

      <nav>
        <ul>
          <li>
            <RouterLink to="/">Home</RouterLink>
          </li>
          <li>
            <RouterLink to="/about">About</RouterLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  /* line-height: 1.5;
  max-height: 100vh; */
  /* display: flex;
  place-items: center;
  align-items: center; */
  /* padding-right: calc(var(--section-gap) / 2); */
}

.logo {
  /* margin: 0 2rem 0 0; */
  /* display: flex;
  align-content: center; */
  /* margin: 2% auto 2% auto; */
}

.shoper-logo {
  /* display: flex;
  place-items: flex-start; */
  /* align-content: center;
  justify-content: center; */
  /* float: left; */
  /* display: inline-flex; */
  /* flex: 1 1 auto; */
  /* margin: 0 2rem 0 0; */
}

header .wrapper {
  /* flex-shrink: 0; */
  /* display: flex;
  place-items: flex-start;
  flex-wrap: wrap;
  margin-left: 0 auto 30px auto; */
}

nav {
  text-align: left;
  margin-left: -1rem;
  font-size: 1rem;
  padding: 1rem 0;
  margin-top: 1rem;
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav li {
  display: list-item;
  list-style: square inside;
}

nav li a {
  /* display: inline-block;
  list-style-type: disc; */
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
}
</style>
