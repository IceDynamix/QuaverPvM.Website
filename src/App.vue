<template>
    <div id="app">
        <div class="container">
            <ElementHeader></ElementHeader>
            <hr />
            <transition name="transition" mode="out-in">
                <router-view />
            </transition>
            <hr />
            <ElementFooter></ElementFooter>
        </div>
    </div>
</template>

<script>
import ElementHeader from "@/components/Elements/ElementHeader.vue";
import ElementFooter from "@/components/Elements/ElementFooter.vue";

export default {
    components: { ElementHeader, ElementFooter },
    created() {
        this.$store.dispatch("login");
    },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Lexend+Deca&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Lexend&display=swap");

:root {
    --background-color: #232323;
    --foreground-color: white;
    --foreground-sub-color: gray;
    --main-font: Lexend, sans-serif;
}

h1,
h2,
h3,
h4,
h5,
h6 {
    font-family: Lexend Deca, Lexend, sans-serif;
    font-weight: bold;
}

* {
    font-family: var(--main-font);
    background-color: var(--background-color);
    color: var(--foreground-color);
    hyphens: auto;
}

.container {
    margin: 0 auto;
    width: 700px;
    padding: 10px;
}

@media only screen and (max-width: 770px) {
    .container {
        margin: 0 auto;
        width: 90%;
    }
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
