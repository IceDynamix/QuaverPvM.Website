<template>
    <div class="header">
        <div class="header-row">
            <div class="title">
                <router-link to="/">QuaverPvM</router-link>
            </div>
            <div class="login">
                <div class="login-content" v-if="loggedIn">
                    <a :href="logoutUrl">Logout</a>
                </div>
                <div class="login-content" v-else>
                    <a :href="loginUrl">Login with Quaver</a>
                </div>
            </div>
        </div>
        <div class="header-row" v-if="!inProduction">
            <Banner
                color="yellow"
                icon="warning"
                content="In development mode"
            />
        </div>
        <div class="nav" v-if="loggedIn">
            <router-link to="/play">Ranked Mode</router-link>
            <router-link to="/random">Unranked Mode</router-link>
        </div>
    </div>
</template>

<script>
import config from "../../config/config";
import Banner from "./ElementBanner.vue";

export default {
    components: {
        Banner,
    },
    computed: {
        loginUrl() {
            return config.apiUrl + "/auth/quaver";
        },
        logoutUrl() {
            return config.apiUrl + "/logout";
        },
        loggedIn() {
            return this.$store.state.user.loggedInUser;
        },
        inProduction() {
            return process.env.NODE_ENV === "production";
        },
    },
};
</script>

<style scoped>
.header-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 25px;
}
.header-row > * {
    flex: 1;
}
.title {
    font-size: 30px;
    flex: 1;
    font-weight: bold;
}
.title > a {
    text-decoration: none;
}
.login {
    flex: 1;
    text-align: right;
}
.nav {
    display: flex;
    flex-direction: row;
    list-style-type: none;
    align-items: center;
    justify-content: space-around;
    margin-top: 25px;
}
</style>
