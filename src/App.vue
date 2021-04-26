<template>
    <div id="app">
        <div class="container">
            <Header />
            <hr />
            <div class="content">
                <transition name="fade" mode="out-in">
                    <router-view />
                </transition>
            </div>
            <hr />
            <Footer />
        </div>
    </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
    components: {
        Header,
        Footer,
    },
    created() {
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

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
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
