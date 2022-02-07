import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../views/Home.vue"
import Faq from "../views/Faq.vue"
import Play from "../views/Play.vue"
import Leaderboards from "../views/Leaderboards.vue"
import Random from "../views/Random.vue"
import User from "../views/User.vue"
import Map from "../views/Map.vue"
import MapRate from "../views/MapRate.vue"
import MapSearch from "../views/SearchMap.vue"
import UserSearch from "../views/SearchUser.vue"

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/faq",
        name: "Frequently asked questions",
        component: Faq
    },
    {
        path: "/play",
        name: "Play",
        component: Play
    },
    {
        path: "/leaderboards",
        name: "Leaderboards",
        component: Leaderboards
    },
    {
        path: "/random",
        name: "Random",
        component: Random
    },
    {
        path: "/user/:id",
        name: "User",
        component: User
    },
    {
        path: "/map/:id",
        name: "Map",
        component: Map
    },
    {
        path: "/map/:id/:rate",
        name: "MapRate",
        component: MapRate
    },
    {
        path: "/search/map",
        name: "Map Search",
        component: MapSearch
    },
    {
        path: "/search/user",
        name: "User Search",
        component: UserSearch
    }
]

const router = new VueRouter({
    mode: "history",
    routes
})

export default router
