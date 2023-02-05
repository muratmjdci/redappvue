import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import {store} from './store/vuex';
import './assets/main.css'

const app = createApp(App)


app.use(router)
app.use(store);

app.mount('#app')