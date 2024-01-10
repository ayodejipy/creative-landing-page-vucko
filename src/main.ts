import './assets/scss/base/_general.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import gsap from './plugins/gsap'

const app = createApp(App)

// register gsap plugin
app.use(gsap)

app.use(createPinia())
app.use(router)

app.mount('#app')
