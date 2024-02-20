<!-- =========================================================================
/// <summary>
/// AppTheme.vue
/// vue-shoƥer
/// created by Mehrdad Soleimanimajd on 05.02.2024
/// </summary>
/// <created>ʆϒʅ, 05.02.2024</created>
/// <changed>ʆϒʅ, 21.02.2024</changed>
========================================================================== -->

<script setup lang="ts">
const props = defineProps<{
  currentTheme: string
}>()

import { ref } from 'vue'
import { onMounted } from 'vue'

const theme = ref(props.currentTheme)
// console.log(theme.value)
const currentTheme = ref(theme.value)
const currentThemeFlag = ref(false)
const nextTheme = ref('')
const buttonSpanEffect = ref('')
const buttonDarkEffect = ref('theme-button-container-text theme-button-dark-text')
const buttonOSdefaultEffect = ref('theme-button-container-text theme-button-osdefault-text')
const buttonLightEffect = ref('theme-button-container-text theme-button-light-text')
const themeEmits = defineEmits(['themeChange'])

onMounted(() => {
  // console.log(theme.value)
  themeEmits('themeChange', theme.value)
  // themeEmits('themeChange', theme.value)
})

themeChange()

function themeChange() {
  // console.log(prm)
  // console.log(currentTheme.value)

  buttonSpanEffect.value === 'theme-button-span-effect'
    ? (buttonSpanEffect.value = 'theme-button-span-effect-disable')
    : (buttonSpanEffect.value = 'theme-button-span-effect')

  if (currentThemeFlag.value === false) {
    currentThemeFlag.value = true
  } else {
    if (currentTheme.value === 'light-theme') {
      nextTheme.value = 'current-theme-adaptive'
    } else if (currentTheme.value === 'dark-theme') {
      nextTheme.value = 'light-theme'
    } else if (currentTheme.value === 'current-theme-adaptive') {
      nextTheme.value = 'dark-theme'
    }
    // currentThemeFlag.value = false
    currentTheme.value = nextTheme.value
  }

  console.log(currentTheme.value)

  currentTheme.value === 'dark-theme'
    ? (buttonDarkEffect.value =
        'theme-button-container-text theme-button-dark-text theme-button-text-effect')
    : (buttonDarkEffect.value = 'theme-button-text-effect-disable')
  currentTheme.value === 'current-theme-adaptive'
    ? (buttonOSdefaultEffect.value =
        'theme-button-container-text theme-button-osdefault-text theme-button-text-effect')
    : (buttonOSdefaultEffect.value = 'theme-button-text-effect-disable')
  currentTheme.value === 'light-theme'
    ? (buttonLightEffect.value =
        'theme-button-container-text theme-button-light-text theme-button-text-effect')
    : (buttonLightEffect.value = 'theme-button-text-effect-disable')

  themeEmits('themeChange', currentTheme.value)
}
</script>

<template>
  <div class="app-theme">
    <!-- <form name="theme-form"></form>
    <label
      >Dark
      <input
        type="radio"
        name="theme-form"
        v-model="currentTheme"
        value="dark-theme"
        @click="themeChange('dark-theme')"
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
        @click="themeChange('light-theme')"
      />
    </label> -->
  </div>
  <div class="theme-button-container">
    <div id="theme-button-indicators">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div class="theme-button-container-wrapper">
      <span :class="buttonSpanEffect" id="theme-button-container-span" @click="themeChange"></span>
      <span :class="buttonDarkEffect" id="theme-button-dark-text">Dark</span>
      <span :class="buttonOSdefaultEffect" id="theme-button-osdefault-text">OS Default</span>
      <span :class="buttonLightEffect" id="theme-button-light-text">Light</span>
      <!-- <span></span>
    <span></span>
    <span></span> -->
    </div>
  </div>
</template>

<style scoped>
.theme-button-container {
  display: block;
  width: 130px;
  height: 30px;
  background-color: val (--color-app-theme-background);
  border: 0px solid #000000;
  margin: 0;
}
.theme-button-container-wrapper {
  display: flex;
  width: 130px;
  height: 30px;
  background-color: val (--color-app-theme-background);
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
  left: 35px;
  background: #ca2121;
}
#theme-button-indicators span:nth-of-type(3) {
  top: 1px;
  left: 70px;
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
#theme-button-osdefault-text {
  /* display: block; */
  left: -2px;
}
#theme-button-light-text {
  /* display: block; */
  left: -2px;
}
.theme-button-span-effect {
  position: relative;

  animation: theme-button-container-span-one 2s normal ease;
}
.theme-button-span-effect-disable {
  position: relative;

  animation: theme-button-container-span-two 2s normal ease;
}
.theme-button-text-effect {
  display: block;
  left: -2px;
  animation: theme-button-container-text 2s normal ease;
}
.theme-button-text-effect-disable {
  display: none;
}

@keyframes theme-button-container-span-one {
  0% {
    left: 0px;
    background-color: #909090;
  }
  50% {
    left: 67px;
    background-color: #000000;
  }
  100% {
    left: 0px;
    background-color: #909090;
  }
}
@keyframes theme-button-container-span-two {
  0% {
    left: 0px;
    background-color: #909090;
  }
  50% {
    left: 67px;
    background-color: #000000;
  }
  100% {
    left: 0px;
    background-color: #909090;
  }
}
@keyframes theme-button-container-text {
  0% {
    opacity: 1;
    letter-spacing: 1px;
  }
  100% {
    opacity: 0;
    letter-spacing: 2px;
  }
}
@media (min-width: 1024px) {
}
</style>
