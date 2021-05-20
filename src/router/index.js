import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Faq from '../views/Faq.vue'
import Play from '../views/Play.vue'
import Leaderboards from '../views/Leaderboards.vue'
import Random from "../views/Random";

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/faq',
        name: 'FAQ',
        component: Faq
    },
    {
        path: '/play',
        name: 'Play',
        component: Play
    },
    {
        path: '/leaderboards',
        name: 'Leaderboards',
        component: Leaderboards
    },
    {
        path: '/random',
        name: 'Random',
        component: Random
    },
]

const router = new VueRouter({
    mode: "history",
    routes
})

export default router
