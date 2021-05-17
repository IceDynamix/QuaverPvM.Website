<template>
    <div id="app">
        <div class="container">
            <Header />
            <hr />
            <div class="content" v-if="false">
                <transition name="transition" mode="out-in">
                    <router-view />
                </transition>
            </div>
            <div class="content" v-else>
                <Banner
                    color="blue"
                    icon="settings"
                    content="Maintenance ongoing, please refer to the Discord for more information!"
                />
            </div>
            <hr />
            <Footer />
        </div>
    </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Banner from "@/components/Banner.vue";

export default {
    components: {
        Header,
        Footer,
        Banner,
    },
    created() {
        this.$store.dispatch("login");
    },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Lexend+Deca&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Lexend&display=swap");
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "Lexend Deca", sans-serif;
    background-color: #434343;
    color: white;
    hyphens: auto;
}
p {
    font-family: "Lexend", sans-serif;
    hyphens: auto;
}
.content {
    margin: 25px;
}
.container {
    max-width: 750px;
    margin: 25px auto;
    padding: 30px;
    height: auto;
}
a {
    color: white;
    text-decoration: underline;
}

.transition-enter-active,
.transition-leave-active {
    transition: opacity 0.2s;
}
.transition-enter,
.transition-leave-to {
    opacity: 0;
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
