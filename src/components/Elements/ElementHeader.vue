
<template>
    <div class="header">
        <div class="header-row">
            <div class="title">
                <router-link to="/">QuaverPvM</router-link>
            </div>
            <div class="login">
                <div class="login-content loggedIn" v-if="$store.state.user">
                    <p>
                        Logged in as
                        <a v-tooltip.left="'Profile page is coming soon!'">
                            {{ $store.state.user.username }}
                        </a>
                    </p>
                    <a :href="logoutUrl">Logout</a>
                </div>
                <div class="login-content" v-else>
                    <a :href="loginUrl">Login</a>
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
        <hr />
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
        inProduction() {
            return process.env.NODE_ENV === "production";
        },
    },
};
</script>

<style scoped>
.header-row {
    display: flex;
    flex-wrap: wrap;
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
.loggedIn > p {
    color: gray;
    margin: 0;
}
.loggedIn > * {
    font-size: 14px;
}
.nav {
    display: flex;
    flex-direction: row;
    list-style-type: none;
    align-items: center;
    justify-content: space-around;
    margin: 25px 0;
}
hr {
    display: block;
    height: 2px;
    border: 0;
    border-top: 2px solid white;
    padding: 0;
    margin: 25px 0;
}
</style>
