<template>
    <div id="app">
        <router-view />
    </div>
</template>

<script>
export default {
    created: function () {
        // this.$store.dispatch("user/login");
        this.$store.dispatch("user/simulateLogin", "6084b989f6ff2970083cc564");
    },
};
</script>

<style>
</style>
