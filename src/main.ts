import Vue from 'vue'
import { createPinia, PiniaVuePlugin } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

import App from './App.vue'
import router from './router'

import './assets/main.css'

Vue.use(PiniaVuePlugin)

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

new Vue({
  router,
  pinia,
  render: (h) => h(App)
}).$mount('#app')
