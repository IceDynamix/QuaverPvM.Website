import axios from "axios"
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import config from './config/config'


Vue.config.productionTip = false

axios.defaults.baseURL = config.apiUrl;
axios.defaults.withCredentials = true;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
