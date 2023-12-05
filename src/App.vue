<!-- =========================================================================
/// <summary>
/// App.vue
/// vue-shoƥer
/// created by Mehrdad Soleimanimajd on 28.11.2023
/// </summary>
/// <created>ʆϒʅ, 28.11.2023</created>
/// <changed>ʆϒʅ, 05.12.2023</changed>
========================================================================== -->

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import AppTitle from './components/AppTitle.vue'
</script>

<template>
  <!-- <header> -->

  <!-- belong to grid representation (for devs with history) -->
  <!-- <div class="row-gap1"></div>
  <div class="row-gap2"></div>
  <div class="row-gap3"></div> -->

  <!-- belong to grid representation -->
  <!-- <div class="column-gap1"></div> -->

  <div class="wrapper">
    <div class="shoper-logo">
      <img alt="Vue logo" class="logo w-14 h-14" src="@/assets/logo.svg" />
      <AppTitle title="Vue Shoƥer" />
    </div>

    <div>
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
  </div>

  <!-- belong to grid representation -->
  <!-- <div class="column-gap2"></div> -->
  <!-- </header> -->

  <div class="content">
    <RouterView />
  </div>

  <!-- belong to grid representation -->
  <!-- <div class="row-gap4"></div>
  <div class="row-gap5"></div>
  <div class="row-gap6"></div> -->
</template>

<style scoped>
.column-gap1 {
  /* grid representation (for devs with history) */
  grid-column: 1/2;
  grid-row: 1;
  width: 100px;
  height: 100px;
}
.column-gap2 {
  /* grid representation */
  grid-column: 3;
  grid-row: 1;
  width: 100px;
  height: 100px;
}
.wrapper {
  grid-column: 2/3;
  grid-row: 1;

  /* flex representation */
  /* display: flex; */
  align-items: center;
  align-self: center;
  justify-content: center;
  place-items: center space-between;
}
.content {
  grid-column: 1 / 3;
  grid-row: 2;

  /* flex representation */
  align-items: flex-start;
  align-self: flex-start;
  justify-content: flex-start;
  place-items: start space-between;
}

.shoper-logo {
  /* grid representation */
  /* display: grid;
  grid-template-columns: 60px 1fr; */

  /* flex representation */
  display: flex;
  align-items: flex-start;
  grid-gap: 10px;
}
.logo {
  /* margin: 0 2rem 0 0; */
  /* display: flex;
    align-content: center; */
  /* margin: 2% auto 2% auto; */
  padding: 2px;
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
  row-gap1,
  row-gap2,
  row-gap3 {
    /* grid representation */
    grid-row: 1;
  }
  row-gap4,
  row-gap5,
  row-gap6 {
    /* grid representation */
    grid-row: 3;
  }
  .row-gap1,
  .row-gap4 {
    /* grid representation */
    grid-column: 1/2;
  }
  .row-gap2,
  .row-gap5 {
    /* grid representation */
    grid-column: 2/3;
  }
  .row-gap3,
  .row-gap6 {
    /* grid representation */
    grid-column: 3;
    width: 100px;
    height: 100px;
  }
  .column-gap1 {
    /* grid representation */
    grid-column: 1/2;
    grid-row: 2;
    width: 100px;
    height: 100px;
  }
  .column-gap2 {
    /* grid representation */
    grid-column: 1/2;
    grid-row: 2;
    width: 100px;
    height: 100px;
  }
  .wrapper {
    grid-column: 1/2;
    grid-row: 2;
  }
  .content {
    grid-column: 2;
    grid-row: 2;
    padding-left: 20px;
  }

  header {
    /* line-height: 1.5;
    max-height: 100vh; */
    /* display: flex;
    place-items: center;
    align-items: center; */
    /* padding-right: calc(var(--section-gap) / 2); */
  }

  .shoper-logo {
    /* display: grid;
    grid-template-columns: 50px 1fr; */
    /* display: flex;
    place-items: center; */
    /* align-content: center; */
    /* justify-content: center; */
    /* float: left; */
    /* display: inline-flex; */
    /* flex: 1 1 auto; */
    /* margin: 0 2rem 0 0; */
  }

  .wrapper {
    /* display: flex; */
    /* align-content: center; */
    align-items: center;
    align-self: center;
    justify-content: center;
    place-items: center space-between;
    /* flex-shrink: 0; */
    /* display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap; */
    /* margin-left: 100px; */
  }

  .content {
    /* flex representation */
    align-self: flex-start;
    align-items: flex-start;
    justify-content: flex-start;
    place-content: end space-between;

    background-color: #ff00008b;
  }
}
</style>
