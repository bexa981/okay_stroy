import './assets/main.css'
import 'aos/dist/aos.css'
import { createApp } from 'vue'
import App from './App.vue'
import i18n from './locales/i18n';
import router from './router'
import Vue3VideoPlayer from '@cloudgeek/vue3-video-player'
import '@cloudgeek/vue3-video-player/dist/vue3-video-player.css'

const app = createApp(App)
app.use(Vue3VideoPlayer)
app.use(router)
app.use(i18n)
app.mount('#app')
