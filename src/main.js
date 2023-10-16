import { createApp } from 'vue'
import App from './App.vue'
import {createPinia} from 'pinia';
import { createRouter, createWebHashHistory } from 'vue-router'
// import './assets/main.css'
// import './assets/index.css'
// Date.prototype.addHours= function(h){
//     this.setHours(this.getHours()+h);
//     return this;
// }
const routes = [
    { path: '/', component: App },
];
const pinia = createPinia();
const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
})
const app = createApp(App)
app.use(routes)
app.use(pinia)
app.mount('#app')
