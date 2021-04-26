<template>
    <div id="app">
        <router-view />
    </div>
</template>

<script>
export default {
    created: function () {
        this.$store.dispatch("user/login");
    },
};
</script>

<style>
</style>
