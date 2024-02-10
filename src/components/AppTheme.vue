<!-- =========================================================================
/// <summary>
/// AppTheme.vue
/// vue-shoƥer
/// created by Mehrdad Soleimanimajd on 05.02.2024
/// </summary>
/// <created>ʆϒʅ, 05.02.2024</created>
/// <changed>ʆϒʅ, 10.02.2024</changed>
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
</template>

<style scoped>
@media (min-width: 1024px) {
}
</style>
