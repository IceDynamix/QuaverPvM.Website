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
        <div class="banner header-row red">
            <div class="excl-point">
                <span class="material-icons"> warning </span>
            </div>
            <div class="banner-content">
                <p>
                    The site just released, which means that map ratings are
                    going to be very inaccurate. Please keep that in mind during
                    gameplay!
                </p>
            </div>
            <div class="excl-point">
                <span class="material-icons"> warning </span>
            </div>
        </div>
        <div class="banner header-row yellow" v-if="!inProduction">
            <div class="excl-point">
                <span class="material-icons"> warning </span>
            </div>
            <div class="banner-content">
                <p>In development mode</p>
            </div>
            <div class="excl-point">
                <span class="material-icons"> warning </span>
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
        inProduction() {
            return process.env.NODE_ENV == "production";
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
.red {
    background-color: salmon;
}
.yellow {
    background-color: khaki;
}
.banner > div {
    background-color: inherit;
}
.banner-content > p {
    background-color: inherit;
    text-align: center;
    color: #434343;
    font-family: "Lexend Deca";
}
.excl-point > span {
    background-color: inherit;
    color: #434343;
    font-size: 30px;
    padding: 10px;
}
</style>
