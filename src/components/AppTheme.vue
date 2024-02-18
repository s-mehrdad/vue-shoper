<!-- =========================================================================
/// <summary>
/// AppTheme.vue
/// vue-shoƥer
/// created by Mehrdad Soleimanimajd on 05.02.2024
/// </summary>
/// <created>ʆϒʅ, 05.02.2024</created>
/// <changed>ʆϒʅ, 18.02.2024</changed>
========================================================================== -->

<script setup lang="ts">
const props = defineProps<{
  currentTheme: string
}>()

import { ref } from 'vue'

const theme = ref(props.currentTheme)
// console.log(theme.value)
const currentTheme = ref(theme.value)
const themeEmits = defineEmits(['themeChange'])
themeEmits('themeChange', 'dark-theme')
</script>

<template>
  <div class="app-theme">
    <form name="theme-form"></form>
    <label
      >Dark
      <input
        type="radio"
        name="theme-form"
        v-model="currentTheme"
        value="dark-theme"
        @click="$emit('themeChange', 'dark-theme')"
        checked
      />
    </label>
    <label
      >Light
      <input
        type="radio"
        name="theme-form"
        v-model="currentTheme"
        value="light-theme"
        @click="$emit('themeChange', 'light-theme')"
      />
    </label>
  </div>
  <div class="theme-button-container">
    <div id="theme-button-indicators">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div class="theme-button-container-wrapper">
      <span id="theme-button-container-span"></span>
      <span class="theme-button-container-text" id="theme-button-dark-text">Dark</span>
      <span class="theme-button-container-text" id="theme-button-default-text">Default</span>
      <span class="theme-button-container-text" id="theme-button-light-text">Light</span>
      <!-- <span></span>
    <span></span>
    <span></span> -->
    </div>
  </div>
</template>

<style scoped>
.theme-button-container {
  display: block;
  width: 87px;
  height: 30px;
  background-color: #ffffff;
  border: 0px solid #000000;
  margin: 0;
}
.theme-button-container-wrapper {
  display: flex;
  width: 87px;
  height: 30px;
  background-color: #ffffff;
  border: 1px solid #000000;
  border-radius: 10px;
  place-content: center space-between;
}
#theme-button-container-span {
  display: block;
  position: relative;
  float: left;
  /* left: -18px; */
  width: 18px;
  height: 28px;
  background-color: #909090;
  border: 1px solid #000000;
  border-radius: 10px;
}
.theme-button-indicators {
}
#theme-button-indicators span {
  display: block;
  position: relative;
  float: left;
  width: 5px;
  height: 6px;
  background-color: #000000;
  border: 1px solid #000000;
  border-radius: 10px;
}
#theme-button-indicators span:nth-child(1) {
  top: 1px;
  left: 1px;
  background: #79efbe;
}
#theme-button-indicators span:nth-of-type(2) {
  top: 1px;
  left: 34px;
  background: #ca2121;
}
#theme-button-indicators span:nth-of-type(3) {
  top: 1px;
  left: 68px;
  background: #ca2121;
}
.theme-button-container-text {
  display: none;
  position: relative;
  float: right;
  place-self: center;
  font-size: 18px;
  /* border: 1px solid #000000;
  border-radius: 10px; */
}
#theme-button-dark-text {
  /* display: block; */
  left: -2px;
}
#theme-button-default-text {
  /* display: block; */
  left: -2px;
}
#theme-button-light-text {
  display: block;
  left: -2px;
}
#theme-button-container-span:hover {
  position: relative;
  left: 67px;

  background: #000;
  /* transition: 2s; */
  /* transition-property: left;
  transition-timing-function: ease;
  transition-duration: 1s; */
  animation: theme-button-container-span 2s infinite ease;
}

@keyframes theme-button-container-span {
  0% {
    left: 0px;
  }
  50% {
    /* left: 30px; */
  }
  100% {
    left: 67px;
  }
}
@media (min-width: 1024px) {
}
</style>
