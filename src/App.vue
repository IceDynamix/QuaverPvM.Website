<template>
    <div id="app">
        <div class="container">
            <Header />
            <HLine />
            <div class="content">
                <transition name="fade" mode="out-in">
                    <router-view />
                </transition>
            </div>
            <HLine />
            <Footer />
        </div>
    </div>
</template>

<script>
import HLine from "@/components/HLine.vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
    components: {
        HLine,
        Header,
        Footer,
    },
    created: function () {
        this.$store.dispatch("user/login");
    },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Lexend+Deca&display=swap");
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "Lexend Deca", sans-serif;
    background-color: #434343;
    color: white;
}
.container {
    max-width: 750px;
    margin: 25px auto;
    padding: 30px;
}
a {
    color: white;
    text-decoration: underline;
}
.content {
    margin: 25px;
    text-align: center;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
}
</style>
