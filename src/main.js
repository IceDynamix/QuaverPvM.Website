import axios from "axios"
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import config from './config/config'
import VTooltip from 'v-tooltip'
import Toasted from "vue-toasted";

Vue.use(VTooltip)
Vue.use(Toasted, { duration: 10 * 1000, position: "bottom-center" })

Vue.config.productionTip = false

axios.defaults.baseURL = config.apiUrl;
axios.defaults.withCredentials = true;
axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
