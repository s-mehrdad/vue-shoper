// ===========================================================================
/// <summary>
/// main.ts
/// vue-shoƥer
/// created by Mehrdad Soleimanimajd on 28.11.2023
/// </summary>
/// <created>ʆϒʅ, 28.11.2023</created>
/// <changed>ʆϒʅ, 29.11.2023</changed>
// ===========================================================================

import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
