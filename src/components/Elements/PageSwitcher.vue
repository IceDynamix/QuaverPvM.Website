<template>
    <div class="page-switcher">
        <p>
            <router-link :to="prevPage" v-if="page > 0">
                <b>←</b>
            </router-link>
            {{ page + 1 }}
            <router-link :to="nextPage" v-if="forwards">
                <b>→</b>
            </router-link>
        </p>
    </div>
</template>

<script>
export default {
    props: ["page", "forwards"],
    computed: {
        prevPage() {
            return { query: { ...this.$route.query, page: this.page - 1 } };
        },
        nextPage() {
            return { query: { ...this.$route.query, page: this.page + 1 } };
        },
    },
};
</script>

<style>
.page-switcher {
    text-align: center;
}
</style>
