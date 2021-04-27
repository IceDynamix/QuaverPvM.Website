<template>
    <div class="play">
        <div v-if="userId != null">
            <Entity :entityId="userId" />
            <Match />
        </div>
        <div v-else>Please log in!</div>
    </div>
</template>

<script>
import Entity from "@/components/Entity/Entity.vue";
import Match from "@/components/Match/Match.vue";

export default {
    components: {
        Entity,
        Match,
    },
    computed: {
        userId() {
            return this.$store.state.user.loggedInUser;
        },
    },
};
</script>

<style scoped>
</style>
