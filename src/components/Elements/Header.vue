
<template>
    <div class="header">
        <div class="header-row">
            <div class="title">
                <router-link to="/">QuaverPvM</router-link>
            </div>
            <div class="login">
                <div class="login-content loggedIn" v-if="$store.state.user">
                    <p class="light-font">
                        Logged in as
                        <router-link
                            :to="`/user/${$store.state.user.userId}`"
                            >{{ $store.state.user.username }}</router-link
                        >
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
        <div>
            <Navbar />
        </div>
    </div>
</template>

<script>
import config from "../../config/config";
import Banner from "./Banner.vue";
import Navbar from "./Navbar.vue";

export default {
    components: {
        Banner,
        Navbar,
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
}
.title > a {
    text-decoration: none;
    font-family: Lexend Deca;
    font-weight: bold;
}
.login {
    flex: 1;
    text-align: right;
}
.loggedIn > p {
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
</style>
