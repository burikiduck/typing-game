import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import Particles from "@tsparticles/vue3";
import { loadSlim } from "@tsparticles/slim";

import App from './App.vue'
import router from './router'

const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

app.use(pinia)
app.use(router)
app.use(Particles, {
  init: async engine => {
    await loadSlim(engine);
  },
})

app.mount('#app')
