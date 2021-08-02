import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Faq from '../views/Faq.vue'

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/faq',
        name: 'Frequently asked questions',
        component: Faq
    }
]

const router = new VueRouter({
    mode: "history",
    routes
})

export default router
