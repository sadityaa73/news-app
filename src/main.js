import { createApp } from 'vue'
import NewsApp from "./components/NewsApp.vue"
import App from './App.vue'


const app = createApp(App);
app.component('NewsApp', NewsApp)

createApp(App).mount('#app')