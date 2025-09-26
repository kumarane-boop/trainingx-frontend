import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js' // explicit path to be safe

createApp(App).use(router).mount('#app')

