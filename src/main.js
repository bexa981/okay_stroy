import './assets/main.css'
import 'aos/dist/aos.css'
import { createApp } from 'vue'
import App from './App.vue'
import i18n from './locales/i18n';
import router from './router'


const app = createApp(App)
app.use(router)
app.use(i18n)
app.mount('#app')
