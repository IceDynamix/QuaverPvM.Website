<template>
    <div class="header">
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
</template>

<script>
import config from "../config/config";

export default {
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
    },
};
</script>

<style scoped>
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 25px;
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
</style>
